import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes/routes.js';
const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

dotenv.config();
app.use(bodyParser.json());

app.use('/api', routes);

const db = async () => {
  try {
    await mongoose.connect(process.env.db_url);
    console.log('db connect');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
  }
};

db();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Server is running'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
