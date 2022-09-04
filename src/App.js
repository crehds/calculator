import './assets/styles.css';
import { Calculator } from './components/Calculator';
import { AppContainer } from './containers';
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Calculator />
    </AppContainer>
  );
}

export default App;
