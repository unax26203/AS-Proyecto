import React from 'react';
import './DashboardEmbed.css';
import dashboard1 from './images/dashboards/dashboard1.png';
import dashboard2 from './images/dashboards/dashboard2.png';
import dashboard3 from './images/dashboards/dashboard3.png';
import dashboard4 from './images/dashboards/dashboard4.png';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#3498db', color: 'white', padding: '10px', textAlign: 'center' }}>
      <h1>Social Media Usage Dashboard</h1>
      <p>Explore various social media metrics</p>
    </header>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: 'white', padding: '10px', textAlign: 'center' }}>
      <p>&copy; 2024 Social Media App. All rights reserved.</p>
    </footer>
  );
};

const DashboardEmbed = () => {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <div className="dashboard">
          <h2>Dashboard 1</h2>
          <div className="iframe-container">
          <div className="image-container">
            <img
              src={dashboard1}
              alt="Dashboard 1"
              width="800"
              height="600"
            />
          </div>
          </div>
        </div>
        <div className="dashboard">
          <h2>Dashboard 2</h2>
          <div className="iframe-container">
          <div className="image-container">
            <img
              src={dashboard2}
              alt="Dashboard 2"
              width="800"
              height="600"
            />
          </div>
          </div>
        </div>
        <div className="dashboard">
          <h2>Dashboard 3</h2>
          <div className="iframe-container">
          <div className="image-container">
            <img
              src={dashboard3}
              alt="Dashboard 3"
              width="800"
              height="600"
            />
          </div>
          </div>
        </div>
        <div className="dashboard">
          <h2>Dashboard 4</h2>
          <div className="iframe-container">
          <div className="image-container">
            <img
              src={dashboard4}
              alt="Dashboard 4"
              width="800"
              height="600"
            />
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardEmbed;
