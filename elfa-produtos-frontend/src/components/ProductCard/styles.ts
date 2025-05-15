import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }
`;

export const Info = styled.div`
  padding: 1rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #555;
  }
`;

export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2e7d32;
`;
