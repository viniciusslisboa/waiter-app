import { Container, Content } from './styles';
import Logo from '../../assets/images/logo.svg';



export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe o pedido dos clientes</h2>
        </div>

        <img src={Logo} alt="Waiter app logo" />
      </Content>
    </Container>
  );
}
