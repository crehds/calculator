import { useState } from 'react';
import { Back } from '../Icons/Back';
import { CalendarIcon } from '../Icons/CalendarIcon';
import { Check } from '../Icons/Check';
import { Equal } from '../Icons/Equal';
import { Calendar } from './components/Calendar';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Key } from './components/Key';
import { Result } from './components/Result';
import { CalculatorWrapper } from './styles';

const executeHandler = ({ value, resultHandler }) => {
  switch (value) {
    case 'check':
      return (
        <Key
          id='calculator-check'
          resultHandler={resultHandler}
          color='cyan-500'
          column={[5, 6]}
          row={[4, 6]}
          type='future'
        >
          <Check />
        </Key>
      );
    case 'equal':
      return (
        <Key
          id='calculator-check'
          resultHandler={resultHandler}
          color='cyan-500'
          column={[5, 6]}
          row={[4, 6]}
          type='execute'
        >
          <Equal />
        </Key>
      );

    default:
      break;
  }
};

const operations = ({ operator, num1, num2 }) => {
  switch (operator) {
    case '÷':
      return num1 / num2;
    case 'x':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    default:
      break;
  }
};

const initialState = {
  firstNum: '',
  secondNum: '',
  waitForSecond: false,
  operator: null,
  displayValue: ' ',
};

export const Calculator = () => {
  const [data, setData] = useState(initialState);
  const [executeButton, setExecuteButton] = useState('check');
  function resultHandler({ type, value }) {
    switch (type) {
      case 'reset':
        return setData({
          firstNum: '',
          secondNum: '',
          waitForSecond: false,
          operator: '',
          displayValue: ' ',
        });
      case 'back':
        if (data.displayValue === ' ') return;
        if (data.displayValue.length === 1) return setData(' ');

        return setData({
          ...data,
          displayValue: data.displayValue.slice(0, -1),
        });
      case 'operation':
        if (data.waitForSecond) {
          const { firstNum, operator, secondNum } = data;
          const num1 = parseInt(firstNum);
          const num2 = parseInt(secondNum);
          const result = operations({ num1, operator, num2 });
          return setData({
            ...data,
            operator: value,
            firstNum: `${result}`,
            secondNum: '',
            displayValue: ` ${result}${value}`,
          });
        }
        setExecuteButton('equal');

        return setData((prevState) => ({
          ...prevState,
          waitForSecond: true,
          operator: value,
          displayValue: prevState.displayValue + value,
        }));

      default:
        return setData((prevState) => {
          if (prevState.waitForSecond) {
            return {
              ...prevState,
              displayValue: prevState.displayValue + value,
              secondNum: prevState.secondNum + value,
            };
          } else {
            return {
              ...prevState,
              displayValue: prevState.displayValue + value,
              firstNum: prevState.firstNum + value,
            };
          }
        });
    }
  }

  return (
    <CalculatorWrapper>
      <Header paragraph={'Add to'} title={'Groceries'} />
      <Content>
        <Result>{data.displayValue}</Result>
        <Key resultHandler={resultHandler} color='gray-100' type='operation'>
          ÷
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          1
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          2
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          3
        </Key>
        <Key resultHandler={resultHandler} color='white' type='back'>
          <Back />
        </Key>
        <Key resultHandler={resultHandler} color='gray-100' type='operation'>
          x
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          4
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          5
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          6
        </Key>
        <Key resultHandler={resultHandler} color='white' type='reset'>
          c
        </Key>
        <Key resultHandler={resultHandler} color='gray-100' type='operation'>
          -
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          7
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          8
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          9
        </Key>
        {executeHandler({ value: executeButton, resultHandler })}
        <Key resultHandler={resultHandler} color='gray-100' type='operation'>
          +
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          <CalendarIcon />
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          0
        </Key>
        <Key resultHandler={resultHandler} color='white'>
          .
        </Key>
        <Calendar>"Thursday March, 10, 2022"</Calendar>
      </Content>
    </CalculatorWrapper>
  );
};
