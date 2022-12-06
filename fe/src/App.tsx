import { GlobalStyles } from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/Index';
import { Orders } from './components/Orders/Index';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center' limit={2} autoClose={2000} />
    </>
  );
}
