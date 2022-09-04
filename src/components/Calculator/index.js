import { Back } from '../Icons/Back';
import { CalendarIcon } from '../Icons/CalendarIcon';
import { Check } from '../Icons/Check';
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
        <Key color='white'>
          <Back />
        </Key>
        <Key color='gray-100'>x</Key>
        <Key color='white'>4</Key>
        <Key color='white'>5</Key>
        <Key color='white'>6</Key>
        <Key color='white'>c</Key>
        <Key color='gray-100'>-</Key>
        <Key color='white'>7</Key>
        <Key color='white'>8</Key>
        <Key color='white'>9</Key>
        <Key color='cyan-500' column={[5, 6]} row={[4, 6]}>
          <Check />
        </Key>
        <Key color='gray-100'>+</Key>
        <Key color='white'>
          <CalendarIcon />
        </Key>
        <Key color='white'>0</Key>
        <Key color='white'>.</Key>
        <Calendar>"Thursday March, 10, 2022"</Calendar>
      </Content>
    </CalculatorWrapper>
  );
};
