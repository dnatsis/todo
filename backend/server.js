import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import todosRoutes from './routes/todosRoutes.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/todos', todosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is running on port ${PORT} in ${process.env.NODE_ENV} mode`
  )
);
