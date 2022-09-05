import { useState } from 'react';
import { Calendar } from './components/Calendar';
import { Content } from './components/Content';
import { Execute } from './components/Execute';
import { Header } from './components/Header';
import { Key } from './components/Key';
import { Result } from './components/Result';
import { keys } from './components/sctructure';
import { CalculatorWrapper } from './styles';

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
          if (!secondNum) return;
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
        if (!secondNum) {
          setExecuteButton('check');
          return setData({
            ...data,
            waitForSecond: false,
            operator: '',
            displayValue: firstNum,
          });
        }
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
      case 'future':
        return;
      default:
        return setData(() => {
          if (waitForSecond) {
            const aux = secondNum === '0';
            const temp = aux ? value : secondNum + value;
            if (aux) {
              return {
                ...data,
                displayValue: displayValue.slice(0, -1) + temp,
                secondNum: temp,
              };
            }
            return {
              ...data,
              displayValue: displayValue + value,
              secondNum: temp,
            };
          } else {
            const aux = firstNum === '0';
            const temp = aux ? value : firstNum + value;
            return {
              ...data,
              displayValue: temp,
              firstNum: temp,
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
        {keys.map((key, i) => (
          <Key key={`key-${i}`} resultHandler={resultHandler} {...key.props}>
            {key.children}
          </Key>
        ))}
        <Execute executeButton={executeButton} resultHandler={resultHandler} />
        <Calendar>"Thursday March, 10, 2022"</Calendar>
      </Content>
    </CalculatorWrapper>
  );
};
