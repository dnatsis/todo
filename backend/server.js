import express from 'express';
import path from 'path';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import todosRoutes from './routes/todosRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/todos', todosRoutes);

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.listen(
  PORT,
  console.log(
    `server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
