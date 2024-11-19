import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import "./App.css";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);




const HomePage = () => {
  // Placeholder data for the graphs
  const carbonData = {
    labels: ["Travel", "Utilities", "Groceries"],
    datasets: [
      {
        label: "Carbon Footprint (kg CO₂)",
        data: [50, 100, 50],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3"],
        borderWidth: 1,
      },
    ],
  };
  

  const expenseData = {
    labels: ["Rent", "Food", "Transportation"],
    datasets: [
      {
        label: "Expenses ($)",
        data: [1200, 800, 500],
        backgroundColor: ["#FFC107", "#03A9F4", "#8BC34A"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">Finance & Carbon Tracker</div>
        <div className="nav-links">
          <button className="nav-button">Sign In</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main">
        {/* Left Section: Carbon Footprint */}
        <div className="left-section">
          <h2>Carbon Footprint</h2>
          <div className="chart-container">
             <Bar data={carbonData} options={chartOptions} /> 
          </div>
        </div>

        {/* Right Section: Expenses */}
        <div className="right-section">
          <h2>Monthly Expenses</h2>
          <div className="chart-container">
            <Bar data={expenseData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
