import api from '../services/api';

const STORAGE_KEY = 'ivarobotics_users'; // Keeping for fallback if needed, or legacy cleanup
const SESSION_KEY = 'ivarobotics_session';
const TOKEN_KEY = 'ivarobotics_token';

// Hash function - kept for client-side legacy or mock fallback
export const hashPassword = (password) => {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(36);
};

export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password && password.length >= 8;
};

// API: Login
export const verifyCredentials = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });

        if (response.data && response.data.access_token) {
            // Save token
            localStorage.setItem(TOKEN_KEY, response.data.access_token);
            return { success: true, user: response.data.user };
        }
        return { success: false, error: 'Invalid response from server' };
    } catch (error) {
        console.error('Login error:', error);
        // Return friendly error message
        const msg = error.response?.data?.detail || 'Authentication failed. Please check your credentials.';
        return { success: false, error: msg };
    }
};

// API: Signup
export const saveUserToStorage = async (userData) => {
    try {
        // Backend expects { email, password, firstName, lastName }
        const payload = {
            email: userData.email,
            password: userData.password,
            firstName: userData.firstName,
            lastName: userData.lastName
        };

        const response = await api.post('/auth/signup', payload);

        if (response.data && response.data.access_token) {
            // Save token
            localStorage.setItem(TOKEN_KEY, response.data.access_token);
            return { success: true, user: response.data.user };
        }
        return { success: false, error: 'Registration failed' };
    } catch (error) {
        console.error('Signup error:', error);
        const msg = error.response?.data?.detail || 'Registration failed. Please try again.';
        return { success: false, error: msg };
    }
};

// Session Management
export const saveSession = (user) => {
    try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        return true;
    } catch (error) {
        console.error('Error saving session:', error);
        return false;
    }
};

export const getSession = () => {
    try {
        const session = localStorage.getItem(SESSION_KEY);
        return session ? JSON.parse(session) : null;
    } catch (error) {
        console.error('Error reading session:', error);
        return null;
    }
};

export const clearSession = () => {
    try {
        localStorage.removeItem(SESSION_KEY);
        localStorage.removeItem(TOKEN_KEY);
        return true;
    } catch (error) {
        console.error('Error clearing session:', error);
        return false;
    }
};
