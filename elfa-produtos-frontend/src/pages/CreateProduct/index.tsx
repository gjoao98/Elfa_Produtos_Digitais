import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container, Form, ImagePreview } from './styles';
import { useNavigate } from 'react-router-dom';

const productSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  price: z.coerce.number().positive('Preço deve ser positivo'),
  description: z.string().optional(),
  brandId: z.string().min(1, 'Marca é obrigatória'),
  image: z.string().optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

type Brand = {
  id: string;
  name: string;
};

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema)
  });

  const [brands, setBrands] = useState<Brand[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/brands').then(res => setBrands(res.data)).catch(() => {});
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      setValue('image', base64);
    };
    reader.readAsDataURL(file);
  };

  const onSubmit = async (data: ProductFormData) => {
    try {
      await api.post('/products', data);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h1>Cadastrar Produto</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome:
          <input {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>

        <label>
          Preço:
          <input type="number" step="0.01" {...register('price')} />
          {errors.price && <span>{errors.price.message}</span>}
        </label>

        <label>
          Descrição:
          <textarea {...register('description')} rows={3} />
        </label>

        <label>
          Marca:
          <select {...register('brandId')}>
            <option value="">Selecione uma marca</option>
            {brands.map(b => (
              <option key={b.id} value={b.id}>{b.name}</option>
            ))}
          </select>
          {errors.brandId && <span>{errors.brandId.message}</span>}
        </label>

        <label>
          Imagem:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        {preview && <ImagePreview src={preview} alt="Preview" />}

        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
}
