import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const brandsPath = path.join(__dirname, '../data/brands.json');

router.get('/', (req, res) => {
  const brands = JSON.parse(fs.readFileSync(brandsPath, 'utf-8'));
  res.json(brands);
});

export default router;
