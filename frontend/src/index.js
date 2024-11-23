import React from 'react';
import ReactDOM from 'react-dom';
import DashboardEmbed from './dashboard';

// Monta el componente DashboardEmbed en el div con id "root"
ReactDOM.render(
  <React.StrictMode>
    <DashboardEmbed />
  </React.StrictMode>,
  document.getElementById('root')
);
