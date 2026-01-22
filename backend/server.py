from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import os
import logging
from pathlib import Path
from datetime import datetime, timedelta
from passlib.context import CryptContext
from jose import JWTError, jwt

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configuration
MONGO_URL = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
DB_NAME = os.environ.get('DB_NAME', 'ivarobotics')
SECRET_KEY = os.environ.get('SECRET_KEY', 'your_super_secret_key_change_this_production')
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30 * 24 * 60  # 30 days

# MongoDB Connection
client = AsyncIOMotorClient(MONGO_URL)
db = client[DB_NAME]

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# App Setup
app = FastAPI()
api_router = APIRouter(prefix="/api")

# CORS
origins = os.environ.get('CORS_ORIGINS', '*').split(',')
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Models ---

class UserCreate(BaseModel):
    email: EmailStr
    password: str
    firstName: str
    lastName: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str
    user: dict

class Product(BaseModel):
    id: int
    name: str
    tagline: str
    description: str
    image: str
    category: str
    features: List[str]

# --- Utils ---

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# --- Data (Mock Products served via API) ---
MOCK_PRODUCTS = [
  {
    "id": 1,
    "name": "Smart Baby Rover",
    "tagline": "Intelligent Child Safety Companion",
    "description": "A real-time monitoring rover engineered to enhance child safety. Equipped with auto-tracking, live video, scheduled photography, and music playback, the Smart Baby Rover seamlessly integrates into modern homes.",
    "image": "/smart-baby-rover.png",
    "category": "home",
    "features": [
      "Auto-tracking technology",
      "Live video streaming",
      "Scheduled photography",
      "Music playback system",
      "Safe home navigation",
      "Real-time alerts"
    ]
  },
  {
    "id": 2,
    "name": "AI Rover Assistant",
    "tagline": "Autonomous Personal Companion",
    "description": "A fully autonomous personal assistant rover built for education, research, and companion robotics. Supports voice commands, environmental mapping, follow-me navigation, memory storage, and expressive feedback.",
    "image": "/ai-rover-assistant.png",
    "category": "professional",
    "features": [
      "Voice command support",
      "Environmental mapping",
      "Follow-me navigation",
      "Memory storage system",
      "AI decision making",
      "Expressive feedback"
    ]
  }
]

# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "IVAROBOTICS API is running"}

@api_router.post("/auth/signup", response_model=Token)
async def signup(user_in: UserCreate):
    # Check if user exists
    existing_user = await db.users.find_one({"email": user_in.email})
    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    
    # Create user
    user_dict = user_in.model_dump()
    hashed_password = get_password_hash(user_dict['password'])
    user_dict['password'] = hashed_password
    user_dict['created_at'] = datetime.utcnow()
    
    result = await db.users.insert_one(user_dict)
    
    # Create token
    access_token = create_access_token(data={"sub": user_dict['email']})
    
    # Return user info (remove sensitive data)
    user_response = {
        "id": str(result.inserted_id),
        "email": user_dict['email'],
        "firstName": user_dict['firstName'],
        "lastName": user_dict['lastName']
    }
    
    return {"access_token": access_token, "token_type": "bearer", "user": user_response}

@api_router.post("/auth/login", response_model=Token)
async def login(user_in: UserLogin):
    user = await db.users.find_one({"email": user_in.email})
    if not user or not verify_password(user_in.password, user['password']):
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    access_token = create_access_token(data={"sub": user['email']})
    
    user_response = {
        "id": str(user['_id']),
        "email": user['email'],
        "firstName": user['firstName'],
        "lastName": user['lastName']
    }
    
    return {"access_token": access_token, "token_type": "bearer", "user": user_response}

@api_router.get("/products", response_model=List[Product])
async def get_products():
    # In a real app, you might fetch this from DB, but for now serving the mock config
    return MOCK_PRODUCTS

@api_router.get("/status")
async def health_check():
    return {"status": "ok", "timestamp": datetime.utcnow()}

# Include Router
app.include_router(api_router)

# Logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()