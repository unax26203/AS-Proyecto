import React, { useState, useEffect } from 'react';
import './UserList.css';

const SocialMediaUsage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Social Media Usage</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>App</th>
            <th>Daily Minutes Spent</th>
            <th>Posts Per Day</th>
            <th>Likes Per Day</th>
            <th>Follows Per Day</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.User_ID}</td>
              <td>{row.App}</td>
              <td>{row.Daily_Minutes_Spent}</td>
              <td>{row.Posts_Per_Day}</td>
              <td>{row.Likes_Per_Day}</td>
              <td>{row.Follows_Per_Day}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default SocialMediaUsage;
