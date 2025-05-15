import { HeaderContainer, Button, LogoButton } from './styles';
import LogoElfa from '../../assets/LogoElfa.jpg';
import { useLocation, useNavigate } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCreatePage = location.pathname === '/create';

  return (
    <HeaderContainer>
      <LogoButton onClick={() => navigate('/')}>
        <img src={LogoElfa} alt="Logo Elfa" />
      </LogoButton>

      <Button onClick={() => navigate(isCreatePage ? '/' : '/create')}>
        {isCreatePage ? 'Lista de Produtos' : 'Cadastrar Produto'}
      </Button>
    </HeaderContainer>
  );
}
