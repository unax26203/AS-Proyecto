import React from 'react';
import ReactDOM from 'react-dom';
import DashboardEmbed from './dashboard';
import SocialMediaUsage from './UserList'

// Monta el componente DashboardEmbed en el div con id "root"
ReactDOM.render(
  <React.StrictMode>
    <DashboardEmbed />
    <SocialMediaUsage />
  </React.StrictMode>,
  document.getElementById('root')
);
