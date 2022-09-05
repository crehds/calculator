import PropTypes from 'prop-types';
import { KeyWrapper } from './styles';

export const Key = ({
  id,
  children,
  color,
  row,
  column,
  resultHandler,
  type,
}) => {
  const keyHandler = (event) => {
    const value = event.target.textContent;
    return resultHandler({ type, value });
  };
  return (
    <KeyWrapper
      id={id}
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
