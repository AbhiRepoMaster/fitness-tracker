import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import '../header.css';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate(); // Add useNavigate hook

    const handleDropdownToggle = () => {
        setShowDropdown(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    const handleLogout = () => {
        console.log('Logging out...');
        // Add your logout logic here
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="fixed-top bg-light shadow-sm p-2">
            <div className="container d-flex justify-content-between align-items-center">
                <h4 className="header-title">Fitness Tracker</h4>
                <div className="d-flex align-items-center" ref={dropdownRef}>
                    {/* Navigation Links */}
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    onClick={() => navigate('/dashboard')}
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    onClick={() => navigate('/profile')}
                                >
                                    Activity
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="#"
                                    className="nav-link"
                                    onClick={() => navigate('/foodSuggestions')}
                                >
                                    Food Suggestions
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Settings Dropdown */}
                    <div className="dropdown me-2">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            onClick={handleDropdownToggle}
                        >
                            <i className="bi bi-gear"></i> Settings
                        </button>
                        {showDropdown && (
                            <div className="dropdown-menu dropdown-menu-end show">
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => {
                                        setShowDropdown(false); // Close the dropdown
                                        navigate('/profile');  // Navigate to the profile page
                                    }}
                                >
                                    <i className="bi bi-person"></i> Profile Settings
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => setShowDropdown(false)}
                                >
                                    <i className="bi bi-gear"></i> Analytic Settings
                                </a>
                                <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={() => setShowDropdown(false)}
                                >
                                    <i className="bi bi-tools"></i> Tools
                                </a>
                            </div>
                        )}
                    </div>

                    {/* People Icon */}
                    <button className="btn btn-outline-secondary me-2">
                        <i className="bi bi-person"></i>
                    </button>

                    {/* Logout Button */}
                    <button className="btn btn-outline-danger" onClick={handleLogout}>
                        <i className="bi bi-box-arrow-right"></i> Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
