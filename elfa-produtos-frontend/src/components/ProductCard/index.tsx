import { CardContainer, ImageWrapper, Info, Price } from './styles';

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

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <CardContainer>
      {product.image && (
        <ImageWrapper>
          <img src={product.image} alt={product.name} />
        </ImageWrapper>
      )}
      <Info>
        <h3>{product.name}</h3>
        <Price>R$ {product.price.toFixed(2)}</Price>
        <p>
          <strong>Marca:</strong> {product.brand ? product.brand.name : 'N/A'}
        </p>
        {product.description && <p>{product.description}</p>}
      </Info>
    </CardContainer>
  );
}