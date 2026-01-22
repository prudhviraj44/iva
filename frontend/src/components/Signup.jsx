import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Signup = () => {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        const result = await signup(formData);

        setLoading(false);

        if (result.success) {
            setSuccess('Account created successfully! Redirecting...');
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                {/* Left Panel */}
                <div className="auth-left-panel">
                    <div className="auth-noise-texture"></div>

                    <div className="auth-brand-header">
                        <img src="/logo.png" alt="IVA Robotics" />
                        <span>IVAROBOTICS</span>
                    </div>

                    <div className="auth-hero-text">
                        <div className="auth-hero-title">Get Started with Us</div>
                        <div className="auth-hero-desc">
                            Complete these easy steps to register your account.
                        </div>

                        <div className="auth-step-list">
                            <div className="auth-step-item active-step">
                                <div className="auth-step-num">1</div>
                                <span>Sign up your account</span>
                            </div>
                            <div className="auth-step-item">
                                <div className="auth-step-num">2</div>
                                <span>Explore our products</span>
                            </div>
                            <div className="auth-step-item">
                                <div className="auth-step-num">3</div>
                                <span>Start your journey</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="auth-right-panel">
                    <div className="auth-form-wrapper">
                        <div className="auth-form-header">
                            <div className="auth-form-title">Sign Up Account</div>
                            <div className="auth-form-desc">
                                Enter your personal data to create your account.
                            </div>
                        </div>

                        {error && <div className="auth-error-message">{error}</div>}
                        {success && <div className="auth-success-message">{success}</div>}

                        <form onSubmit={handleSubmit}>
                            <div className="auth-row-inputs">
                                <div className="auth-input-box">
                                    <label className="auth-input-label">First Name</label>
                                    <input
                                        className="auth-input-field"
                                        type="text"
                                        name="firstName"
                                        placeholder="eg. John"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="auth-input-box">
                                    <label className="auth-input-label">Last Name</label>
                                    <input
                                        className="auth-input-field"
                                        type="text"
                                        name="lastName"
                                        placeholder="eg. Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="auth-input-box">
                                <label className="auth-input-label">Email</label>
                                <input
                                    className="auth-input-field"
                                    type="email"
                                    name="email"
                                    placeholder="eg. john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="auth-input-box">
                                <label className="auth-input-label">Password</label>
                                <div className="auth-password-wrapper">
                                    <input
                                        className="auth-input-field"
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    {showPassword ? (
                                        <EyeOff
                                            className="auth-eye-icon"
                                            size={20}
                                            onClick={() => setShowPassword(false)}
                                        />
                                    ) : (
                                        <Eye
                                            className="auth-eye-icon"
                                            size={20}
                                            onClick={() => setShowPassword(true)}
                                        />
                                    )}
                                </div>
                            </div>

                            <div className="auth-hint-text">Must be at least 8 characters.</div>

                            <button
                                type="submit"
                                className="auth-submit-button"
                                disabled={loading}
                            >
                                {loading ? 'Creating Account...' : 'Sign Up'}
                            </button>
                        </form>

                        <div className="auth-footer-text">
                            Already have an account? <Link to="/login">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
