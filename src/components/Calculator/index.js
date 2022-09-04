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
      let result = num1 / num2;
      return isFinite(result) ? result : 'Operación inválida';
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
    const { displayValue, waitForSecond, secondNum, firstNum, operator } = data;
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
        if (displayValue === ' ') return;

        const strToDelete = displayValue.slice(-1);

        if (waitForSecond) {
          if ('x+-÷'.includes(strToDelete)) {
            return setData({
              ...data,
              waitForSecond: false,
              operator: '',
              displayValue: displayValue.slice(0, -1),
            });
          } else {
            const aux = secondNum.slice(0, -1);
            const temp = aux === ' ' ? '' : aux;
            return setData({
              ...data,
              secondNum: temp,
              displayValue: displayValue.slice(0, -1),
            });
          }
        }
        const aux = firstNum.slice(0, -1);
        const temp1 = aux === ' ' ? '' : aux;
        return setData({
          ...data,
          firstNum: temp1,
          displayValue: displayValue.slice(0, -1),
        });
      case 'operation':
        if (waitForSecond) {
          const num1 = firstNum.includes('.')
            ? parseFloat(firstNum)
            : parseInt(firstNum);
          const num2 = secondNum.includes('.')
            ? parseFloat(secondNum)
            : parseInt(secondNum);
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

        return setData({
          ...data,
          waitForSecond: true,
          operator: value,
          displayValue: displayValue + value,
        });
      case 'execute':
        const num1 = firstNum.includes('.')
          ? parseFloat(firstNum)
          : parseInt(firstNum);
        const num2 = secondNum.includes('.')
          ? parseFloat(secondNum)
          : parseInt(secondNum);
        const result = operations({ num1, operator, num2 });
        setExecuteButton('check');
        return setData({
          displayValue: `${result}`,
          firstNum: `${result}`,
          secondNum: '',
          operator: '',
          waitForSecond: false,
        });
      case 'decimal':
        if (waitForSecond) {
          if (secondNum.includes('.')) return;
          const temp = secondNum ? `.` : '0.';
          return setData({
            ...data,
            secondNum: secondNum + temp,
            displayValue: displayValue + temp,
          });
        }
        if (firstNum.includes('.')) return;
        const temp = firstNum ? `.` : '0.';
        return setData({
          ...data,
          firstNum: firstNum + temp,
          displayValue: displayValue + temp,
        });
      default:
        return setData(() => {
          if (waitForSecond) {
            return {
              ...data,
              displayValue: displayValue + value,
              secondNum: secondNum + value,
            };
          } else {
            return {
              ...data,
              displayValue: displayValue + value,
              firstNum: firstNum + value,
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
        <Key resultHandler={resultHandler} color='white' type='decimal'>
          .
        </Key>
        <Calendar>"Thursday March, 10, 2022"</Calendar>
      </Content>
    </CalculatorWrapper>
  );
};
