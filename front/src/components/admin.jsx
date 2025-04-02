import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import '../assets/styles/admin.css';

const Header = () => {
    const toggleTheme = () => {
        const body = document.body;
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('dark-theme', isDarkTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('dark-theme');
        if (savedTheme === 'true') {
            document.body.classList.add('dark-theme');
        }
    }, []);

    return (
        <header className="gradient-bg shadow-lg">
            <nav>
                <Link to="/" className="logo">Crime Portal</Link>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li>
                        <button className="theme-toggle" onClick={toggleTheme}>🌓</button>
                    </li>
                    <li>
                        <Link to="/profile" className="profile-icon">👤</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="gradient-bg shadow-lg">
            <div className="container">
                <p>&copy; 2023 Crime Portal. All rights reserved.</p>
                <ul>
                    <li><Link to="/terms">Terms of Service</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </div>
        </footer>
    );
};

const Admin = () => {
    const searchComplaint = () => {
        const searchInput = document.getElementById('searchInput').value;
        alert(`Searching for complaint ID: ${searchInput}`);
        // Implement search functionality here
    };

    const filterComplaints = () => {
        const filter = document.getElementById('filter').value;
        alert(`Filtering complaints by status: ${filter}`);
        // Implement filter functionality here
    };

    const sortComplaints = () => {
        const sort = document.getElementById('sort').value;
        alert(`Sorting complaints by date: ${sort}`);
        // Implement sort functionality here
    };

    return (
        <div className="App">
            <Header />
            <section id="hero" className="parallax">
                <div className="container parallax-content">
                    <h1>Complaint Status</h1>
                    <p>Track the progress of your reported complaints.</p>
                </div>
            </section>

            <section id="dashboard" className="container">
                <h2>User Dashboard</h2>
                <div className="dashboard-content">
                    <div className="user-info">
                        <h3>Welcome, John Doe</h3>
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                    <div className="user-complaints">
                        <h3>Your Complaints</h3>
                        <ul>
                            <li>Complaint #12345 - Under Review</li>
                            <li>Complaint #12346 - Resolved</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="complaint-status" className="container">
                <h2>Your Complaint Status</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Complaint ID" id="searchInput" />
                    <button onClick={searchComplaint}>Search</button>
                </div>
                <div className="filter-sort">
                    <label htmlFor="filter">Filter by Status:</label>
                    <select id="filter" onChange={filterComplaints}>
                        <option value="all">All</option>
                        <option value="under-review">Under Review</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                    </select>
                    <label htmlFor="sort">Sort by Date:</label>
                    <select id="sort" onChange={sortComplaints}>
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>
                </div>
                <div className="status-container">
                    <div className="status-card">
                        <h3>Complaint ID: #12345</h3>
                        <p>Type: Theft</p>
                        <p>Status: Under Review</p>
                        <p>Date: 2023-10-01</p>
                        <div className="progress-bar">
                            <div className="progress-step submitted active">Submitted</div>
                            <div className="progress-step under-review">Under Review</div>
                            <div className="progress-step resolved">Resolved</div>
                        </div>
                    </div>
                    <div className="status-card">
                        <h3>Complaint ID: #12346</h3>
                        <p>Type: Harassment</p>
                        <p>Status: In Progress</p>
                        <p>Date: 2023-10-02</p>
                        <div className="progress-bar">
                            <div className="progress-step submitted active">Submitted</div>
                            <div className="progress-step under-review active">Under Review</div>
                            <div className="progress-step resolved">Resolved</div>
                        </div>
                    </div>
                    {/* Add more status cards as needed */}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Admin;