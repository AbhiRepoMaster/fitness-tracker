// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import FoodSuggestions from './components/FoodSuggestions';
import Profile from './components/Profile';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/foodSuggestions" element={<FoodSuggestions />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* Add more routes as needed */}
                </Routes>
            </main>
        </div>
    );
};

export default App;
