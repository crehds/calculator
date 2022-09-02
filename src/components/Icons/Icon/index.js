import PropTypes from 'prop-types';
import { StyledSvg } from './styles';

export const Icon = ({ color, size, children }) => {
  console.log(children);
  return (
    <StyledSvg color={color} width={size} height={size} viewBox='0 0 32 32'>
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
