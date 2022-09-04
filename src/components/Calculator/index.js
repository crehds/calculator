import { Calendar } from './components/Calendar';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Key } from './components/Key';
import { Result } from './components/Result';
import { CalculatorWrapper } from './styles';

export const Calculator = () => {
  return (
    <CalculatorWrapper>
      <Header paragraph={'Add to'} title={'Groceries'} />
      <Content>
        <Result> </Result>
        <Key color='gray-100'>÷</Key>
        <Key color='white'>1</Key>
        <Key color='white'>2</Key>
        <Key color='white'>3</Key>
        <Key color='white'>{'<='}</Key>
        <Key color='gray-100'>x</Key>
        <Key color='white'>4</Key>
        <Key color='white'>5</Key>
        <Key color='white'>6</Key>
        <Key color='white'>c</Key>
        <Key color='gray-100'>-</Key>
        <Key color='white'>7</Key>
        <Key color='white'>8</Key>
        <Key color='white'>9</Key>
        <Key color='cyan-500'>+</Key>
        <Key color='gray-100'>+</Key>
        <Key color='white'>ca</Key>
        <Key color='white'>0</Key>
        <Key color='white'>.</Key>
        <Key color='cyan-500'>+</Key>
        <Calendar>"Thursday March, 10, 2022"</Calendar>
      </Content>
    </CalculatorWrapper>
  );
};
