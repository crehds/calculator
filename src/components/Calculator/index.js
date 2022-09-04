import { useState } from 'react';
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
  const [result, setResult] = useState(' ');

  function resultHandler(str) {
    switch (str) {
      case 'reset':
        return setResult(' ');
      case 'back':
        if (result === ' ') return;
        if (result.length === 1) return setResult(' ');

        let temp = result.split('');
        temp.pop();
        return setResult(temp.join(''));

      default:
        return setResult((prevState) => (prevState += str));
    }
  }

  return (
    <CalculatorWrapper>
      <Header paragraph={'Add to'} title={'Groceries'} />
      <Content>
        <Result>{result}</Result>
        <Key resultHandler={resultHandler} color='gray-100'>
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
        <Key resultHandler={resultHandler} color='gray-100'>
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
        <Key resultHandler={resultHandler} color='gray-100'>
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
        <Key
          resultHandler={resultHandler}
          color='cyan-500'
          column={[5, 6]}
          row={[4, 6]}
        >
          <Check />
        </Key>
        <Key resultHandler={resultHandler} color='gray-100'>
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
