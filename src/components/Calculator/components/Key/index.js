import PropTypes from 'prop-types';
import { KeyWrapper } from './styles';

export const Key = ({ children, color, row, column }) => {
  return (
    <KeyWrapper
      color={`var(--${color})`}
      row={row}
      column={column}
      className={'content-x--large'}
    >
      {children}
    </KeyWrapper>
  );
};

Key.propsTypes = {
  color: PropTypes.oneOf(['white', 'gray-100']),
  children: PropTypes.element,
};
