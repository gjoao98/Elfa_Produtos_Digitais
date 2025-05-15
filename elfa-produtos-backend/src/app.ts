import express from 'express';
import cors from 'cors';

import productsRouter from './routes/products';
import brandsRouter from './routes/brands';

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

app.use('/products', productsRouter);
app.use('/brands', brandsRouter);

export default app;
