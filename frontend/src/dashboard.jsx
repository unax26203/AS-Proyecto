import React from 'react';
import './DashboardEmbed.css';


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
          <iframe
              src="http://localhost:3001/public/question/bcb95dfb-e227-480a-a65e-7c2753f7d0c3"
              frameborder="0"
              width="800"
              height="600"
              allowtransparency
          ></iframe>
          </div>
        </div>
        <div className="dashboard">
          <h2>Dashboard 2</h2>
          <div className="iframe-container">
          <iframe
            src="http://localhost:3001/public/question/98753eac-a44f-45ba-8df3-08a9ef61575a"
            frameborder="0"
            width="800"
            height="600"
            allowtransparency
          ></iframe>
          </div>
        </div>
        <div className="dashboard">
          <h2>Dashboard 3</h2>
          <div className="iframe-container">
          <iframe
            src="http://localhost:3001/public/question/fb572a05-1e74-4149-b984-45a8bd1bb28c"
            frameborder="0"
            width="800"
            height="600"
            allowtransparency
          ></iframe>
          </div>
        </div>
        <div className="dashboard">
          <h2>Dashboard 4</h2>
          <div className="iframe-container">
          <iframe
            src="http://localhost:3001/public/question/e53087bd-b6d8-4b35-b166-42f904bdab1d"
            frameborder="0"
            width="800"
            height="600"
            allowtransparency
          ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardEmbed;
