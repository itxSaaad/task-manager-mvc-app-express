import express from 'express';
import morgan from 'morgan';

import taskRoutes from './routes/tasksRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/v1/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} mode on port ${PORT}`);
});
