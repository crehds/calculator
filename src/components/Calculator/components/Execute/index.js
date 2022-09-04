import { Check } from '../../../Icons/Check';
import { Equal } from '../../../Icons/Equal';
import { Key } from '../Key';

export const Execute = ({ executeButton, resultHandler }) => {
  switch (executeButton) {
    case 'check':
      return (
        <Key
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
