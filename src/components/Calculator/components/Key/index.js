import PropTypes from 'prop-types';
import { KeyWrapper } from './styles';

export const Key = ({ children, color, row, column, resultHandler, type }) => {
  const keyHandler = (event) => {
    if (type) return resultHandler(type);
    const value = event.target.textContent;
    return resultHandler(value);
  };
  return (
    <KeyWrapper
      color={`var(--${color})`}
      row={row}
      column={column}
      className={'content-x--large'}
      onClick={(e) => keyHandler(e)}
    >
      {children}
    </KeyWrapper>
  );
};

Key.propsTypes = {
  color: PropTypes.oneOf(['white', 'gray-100']),
  children: PropTypes.element,
};
