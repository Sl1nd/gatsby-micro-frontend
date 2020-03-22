import React from 'react';
import { Link, Router } from '@reach/router';
import One from '../components/one';

const Home = () => <p>Home</p>;

const Dashboard = () => (
    <div>
        <h1>Dashboard</h1>
        <nav>
            <Link to="/app/dashboard/one">Page One</Link>
        </nav>
        <Router>
            <Home path="/app/dashboard/" />
            <One path="/app/dashboard/one" />
        </Router>
    </div>
);

export default Dashboard;