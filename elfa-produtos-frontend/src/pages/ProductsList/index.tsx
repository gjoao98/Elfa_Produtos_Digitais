import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash/debounce';

import { api } from '../../services/api';
import { ProductCard } from '../../components/ProductCard';
import { CardGrid, Container, SearchInput, Title } from './styles';

type Brand = {
  id: string;
  name: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  brand: Brand;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  const debounceSetSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, 500),
    []
  );

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    debounceSetSearch(e.target.value);
  }

  useEffect(() => {
    api.get(`/products?name=${debouncedSearch}`)
      .then(res => setProducts(res.data))
      .catch(console.error);
  }, [debouncedSearch]);

  return (
    <Container>
      <Title>Produtos</Title>

      <SearchInput
        type="text"
        placeholder="Buscar por nome ou marca"
        value={search}
        onChange={handleSearchChange}
      />

      {products.length > 0 ? (
        <CardGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CardGrid>
      ) : (
        <p style={{ marginTop: '2rem' }}>Nenhum produto encontrado.</p>
      )}
    </Container>
  );
}
