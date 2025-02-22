import express, { json } from 'express';
import connectDB from './config/db.js';
import { router as userRouter } from './routes/userRoutes.js';
import { router as quoteRouter } from './routes/quoteRoutes.js';
import cors from 'cors';

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(json());

connectDB();

app.use('/api/users', userRouter);
app.use('/api/quotes', quoteRouter);

app.get('/api/Hello', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Active on port ${port}`);
});

