import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

const productsPath = path.join(__dirname, '../data/products.json');
const brandsPath = path.join(__dirname, '../data/brands.json');

router.get('/', (req, res) => {
  const products = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  const brands = JSON.parse(fs.readFileSync(brandsPath, 'utf-8'));

  const search = (req.query.name?.toString() || '').toLowerCase();

  const filtered = products
    .filter((product: any) => {
      const brand = brands.find((b: any) => b.id === product.brandId);
      const productName = product.name.toLowerCase();
      const brandName = brand?.name.toLowerCase() || '';

      return productName.includes(search) || brandName.includes(search);
    })
    .map((product: any) => {
      const brand = brands.find((b: any) => b.id === product.brandId);
      return {
        ...product,
        brand: brand || { id: null, name: 'Marca desconhecida' },
      };
    });

  res.json(filtered);
});

router.post('/', (req, res) => {
  const { name, price, description, image, brandId } = req.body;

  if (!name || !price || !brandId) {
    return res.status(400).json({ message: 'Campos obrigatórios ausentes' });
  }

  const newProduct = {
    id: uuidv4(),
    name,
    price,
    description,
    image,
    brandId
  };

  try {
    const fileContent = fs.readFileSync(productsPath, 'utf-8');
    const products = fileContent ? JSON.parse(fileContent) : [];
    products.push(newProduct);
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao salvar produto:', error);
    res.status(500).json({ message: 'Erro ao salvar produto' });
  }
});

export default router;
