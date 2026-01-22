import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    saveUserToStorage,
    verifyCredentials,
    saveSession,
    getSession,
    clearSession,
    validateEmail,
    validatePassword
} from '../utils/authUtils';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check for existing session on mount
    useEffect(() => {
        const session = getSession();
        if (session) {
            setCurrentUser(session);
        }
        setLoading(false);
    }, []);

    const signup = async (userData) => {
        try {
            // Validate inputs
            if (!userData.firstName || !userData.lastName) {
                return { success: false, error: 'First name and last name are required' };
            }

            if (!validateEmail(userData.email)) {
                return { success: false, error: 'Please enter a valid email address' };
            }

            if (!validatePassword(userData.password)) {
                return { success: false, error: 'Password must be at least 8 characters long' };
            }

            // Save user to storage
            const result = await saveUserToStorage(userData);

            if (result.success) {
                // Auto-login after signup
                setCurrentUser(result.user);
                saveSession(result.user);
            }

            return result;
        } catch (error) {
            console.error('Signup error:', error);
            return { success: false, error: 'Signup failed. Please try again.' };
        }
    };

    const login = async (email, password) => {
        try {
            // Validate inputs
            if (!validateEmail(email)) {
                return { success: false, error: 'Please enter a valid email address' };
            }

            if (!password) {
                return { success: false, error: 'Password is required' };
            }

            // Verify credentials
            const result = await verifyCredentials(email, password);

            if (result.success) {
                setCurrentUser(result.user);
                saveSession(result.user);
            }

            return result;
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: 'Login failed. Please try again.' };
        }
    };

    const logout = () => {
        setCurrentUser(null);
        clearSession();
    };

    const value = {
        currentUser,
        isAuthenticated: !!currentUser,
        signup,
        login,
        logout,
        loading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
