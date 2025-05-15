import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  height: 9rem;
  background: ${(props) => props.theme.white};

  img {
    width: 9rem;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme['gray-500']};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme['gray-900']};
  }
`;

export const LogoButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;