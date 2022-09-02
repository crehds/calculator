import './colors.css';
import { Header } from './components/Calculator/components/Header';
import { Cart } from './components/Icons/Cart';
import { AppContainer } from './containers';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header title={'Groceries'} />
    </AppContainer>
  );
}

export default App;
