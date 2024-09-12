import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../FoodSuggestions.css';

// Register the required components for Pie chart
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function FoodSuggestions() {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Simulate fetching food suggestions
        const fetchSuggestions = async () => {
            const data = [
                { id: 1, name: 'Grilled Chicken Salad', calories: 350 },
                { id: 2, name: 'Quinoa and Veggies', calories: 400 },
                { id: 3, name: 'Greek Yogurt with Berries', calories: 200 }
            ];
            setSuggestions(data);
        };

        fetchSuggestions();
    }, []);

    // Prepare data for Pie chart
    const pieData = {
        labels: suggestions.map(item => item.name),
        datasets: [
            {
                label: 'Calories',
                data: suggestions.map(item => item.calories),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="food-suggestions">
            <h2>Food Suggestions</h2>
            {suggestions.length > 0 ? (
                <div>
                    <ul>
                        {suggestions.map(item => (
                            <li key={item.id}>
                                <strong>{item.name}</strong> - {item.calories} calories
                            </li>
                        ))}
                    </ul>
                    <div className="pie-chart">
                        <Pie data={pieData} />
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default FoodSuggestions;
