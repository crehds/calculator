import './assets/styles.css';
import { Header } from './components/Calculator/components/Header';
import { AppContainer } from './containers';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header title={'Groceries'} paragraph={'Add to'} />
    </AppContainer>
  );
}

export default App;
