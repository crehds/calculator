import PropTypes from 'prop-types';
import { ResultWrapper } from './styles';

export const Result = ({ children }) => {
  return (
    <ResultWrapper className='content-x--large'>{`$ ${children}`}</ResultWrapper>
  );
};

Result.propTypes = {
  children: PropTypes.string,
};
