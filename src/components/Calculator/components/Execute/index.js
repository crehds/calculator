import { Check } from '../../../Icons/Check';
import { Equal } from '../../../Icons/Equal';
import { Key } from '../Key';

const configHandler = (executeButton) => {
  switch (executeButton) {
    case 'equal':
      return {
        type: 'execute',
        children: <Equal />,
      };
    default:
      return {
        type: 'future',
        children: <Check />,
      };
  }
};
export const Execute = ({ executeButton, resultHandler }) => {
  const { type, children } = configHandler(executeButton);
  return (
    <Key
      resultHandler={resultHandler}
      color={'cyan-500'}
      column={[5, 6]}
      row={[4, 6]}
      type={type}
    >
      {children}
    </Key>
  );
};
