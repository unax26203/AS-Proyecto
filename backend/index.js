const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const Redis = require('ioredis');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Crear un cliente de Redis
const redisClient = new Redis({
  host: 'redis', // Nombre del servicio en Docker Compose
  port: 6379 // Puerto por defecto de Redis
});

// Función para conectar a Redis
const connectRedis = () => {
  return new Promise((resolve, reject) => {
    redisClient.on('connect', () => {
      console.log('Conectado a Redis');
      resolve('Conectado a Redis');
    });
    redisClient.on('error', (err) => {
      console.error('Error al conectar a Redis:', err);
      reject('Error al conectar a Redis');
    });
  });
};

// Crear una conexión a MySQL
const db = mysql.createPool({
  host: 'mysql',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Función para conectar a la base de datos MySQL
const connectDb = () => {
  return new Promise((resolve, reject) => {
    let retries = 5;
    const connect = () => {
      db.getConnection((err, connection) => {
        if (err && retries > 0) {
          retries--;
          console.log(`Reintentando conexión a MySQL (${retries} intentos restantes)...`);
          setTimeout(connect, 5000); // Esperar 5 segundos antes de reintentar
        } else if (err) {
          reject('No se pudo conectar a la base de datos MySQL después de varios intentos');
        } else {
          console.log('Conectado a la base de datos MySQL');
          connection.release();
          resolve();
        }
      });
    };
    connect();
  });
};

// Al arrancar el servidor, asegúrate de que Redis y MySQL estén conectados
const init = async () => {
  try {
    // Conectar a Redis y MySQL simultáneamente
    await Promise.all([connectRedis(), connectDb()]);

    // Iniciar el servidor solo cuando ambas conexiones estén listas
    app.listen(5000, () => console.log('Server running on port 5000'));
  } catch (error) {
    console.error('Error de conexión:', error);
    process.exit(1); // Si hay un error, salimos del proceso
  }
};

// Llamamos a la función de inicialización
init();

// Endpoint para obtener los usuarios con cache en Redis
app.get('/users', async (req, res) => {
  try {
    // Verificar si los datos están en cache de Redis
    redisClient.get('social_media_usage', (err, data) => {
      if (data) {
        console.log('Datos desde Redis');
        return res.json(JSON.parse(data)); // Si están en Redis, devolverlos desde allí
      } else {
        db.query('SELECT * FROM social_media_usage', (err, results) => {
          if (err) {
            console.error('Error en la consulta a la base de datos:', err);
            return res.status(500).send('Error en la consulta a la base de datos');
          }
          // Guardar los resultados en Redis para futuras consultas
          redisClient.setex('social_media_usage', 3600, JSON.stringify(results)); // Guardamos en cache por 1 hora
          res.json(results);
        });
      }
    });
  } catch (error) {
    console.error('Error al conectar con Redis:', error);
    res.status(500).send('Error de conexión con Redis');
  }
});