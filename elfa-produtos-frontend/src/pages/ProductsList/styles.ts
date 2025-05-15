import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props  => props.theme['gray-900']};
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 2rem;
  font-size: 1rem;

  &:focus {
    outline: 2px solid ${props => props.theme['red-500']};
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
`;
