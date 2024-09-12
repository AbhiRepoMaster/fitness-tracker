import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../dashboard.css';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import FoodSuggestions from '../components/FoodSuggestions'; 
import '../FoodSuggestions.css';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement 
);

function Dashboard() {
    const [fitnessData, setFitnessData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = {
                steps: 12000,
                caloriesBurned: 800,
                workoutDuration: 60 
            };
            setFitnessData(data);
        };

        fetchData();
    }, []);

    const stepsData = {
        labels: ['Today'],
        datasets: [
            {
                label: 'Steps',
                data: [fitnessData?.steps || 0],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }
        ]
    };

    const caloriesData = {
        labels: ['Today'],
        datasets: [
            {
                label: 'Calories Burned',
                data: [fitnessData?.caloriesBurned || 0],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(153, 102, 255, 0.4)',
            }
        ]
    };

    const workoutData = {
        labels: ['Today'],
        datasets: [
            {
                label: 'Workout Duration (minutes)',
                data: [fitnessData?.workoutDuration || 0],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 159, 64, 0.4)',
            }
        ]
    };

    const combinedData = {
        labels: ['Today'],
        datasets: [
            {
                label: 'Steps',
                data: [fitnessData?.steps || 0],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                yAxisID: 'y1'
            },
            {
                label: 'Calories Burned',
                data: [fitnessData?.caloriesBurned || 0],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                yAxisID: 'y2'
            },
            {
                label: 'Workout Duration',
                data: [fitnessData?.workoutDuration || 0],
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                fill: true,
                yAxisID: 'y3'
            }
        ]
    };

    const combinedOptions = {
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Steps'
                }
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Calories Burned'
                }
            },
            y3: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Workout Duration'
                }
            }
        }
    };

    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-content">
                <h2>Fitness Analysis</h2>
                {fitnessData ? (
                    <div className="charts-row">
                        <div className="chart-container">
                            <h3>Steps</h3>
                            <Line data={stepsData} />
                        </div>
                        <div className="chart-container">
                            <h3>Calories Burned</h3>
                            <Bar data={caloriesData} />
                        </div>
                        <div className="chart-container">
                            <h3>Workout Duration</h3>
                            <Bar data={workoutData} />
                        </div>
                        <div className="chart-container">
                            <h3>Combined Analysis</h3>
                            <Line data={combinedData} options={combinedOptions} />
                        </div>
                        <div className="chart-container">
                          {/*  <h3>Food Suggestions</h3>*/}
                            <FoodSuggestions />
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
