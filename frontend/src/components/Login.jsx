import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await login(formData.email, formData.password);

        setLoading(false);

        if (result.success) {
            navigate('/');
        } else {
            setError(result.error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                {/* Left Panel */}
                <div className="auth-left-panel login-panel">
                    <div className="auth-noise-texture"></div>

                    <div className="auth-brand-header">
                        <img src="/logo.png" alt="IVA Robotics" />
                        <span>IVAROBOTICS</span>
                    </div>

                    <div className="auth-hero-text">
                        <div className="auth-hero-title">Welcome Back</div>
                        <div className="auth-hero-desc">
                            Sign in to access your account and continue your journey with us.
                        </div>

                        <div className="auth-step-list">
                            <div className="auth-step-item active-step">
                                <div className="auth-step-num">1</div>
                                <span>Enter your credentials</span>
                            </div>
                            <div className="auth-step-item">
                                <div className="auth-step-num">2</div>
                                <span>Access your dashboard</span>
                            </div>
                            <div className="auth-step-item">
                                <div className="auth-step-num">3</div>
                                <span>Explore our products</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Form */}
                <div className="auth-right-panel">
                    <div className="auth-form-wrapper">
                        <div className="auth-form-header">
                            <div className="auth-form-title">Log In</div>
                            <div className="auth-form-desc">
                                Enter your credentials to access your account.
                            </div>
                        </div>

                        {error && <div className="auth-error-message">{error}</div>}

                        <form onSubmit={handleSubmit}>
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

                            <button
                                type="submit"
                                className="auth-submit-button"
                                disabled={loading}
                            >
                                {loading ? 'Logging in...' : 'Log In'}
                            </button>
                        </form>

                        <div className="auth-footer-text">
                            Don't have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
