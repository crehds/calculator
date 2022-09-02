import PropTypes from 'prop-types';
import { StyledSvg } from './styles';

export const Icon = ({ color, size, children }) => {
  return (
    <StyledSvg
      color={color}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      {children}
    </StyledSvg>
  );
};

Icon.defaultProps = {
  size: '40',
  color: 'white',
};

Icon.propTypes = {
  children: PropTypes.element,
  size: PropTypes.string,
  color: PropTypes.string,
};
