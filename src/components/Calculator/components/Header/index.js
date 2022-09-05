import PropTypes from 'prop-types';
import { Cart } from '../../../Icons/Cart';
import { HeaderWrapper, IconWrapper, TextWrapper } from './styles';

export const Header = ({ paragraph, title }) => (
  <HeaderWrapper>
    <IconWrapper>
      <Cart size={'20'} color={'var(--cyan-500)'} />
    </IconWrapper>
    <TextWrapper>
      <p className='content-x--small'>{paragraph}</p>
      <p className='content-base'>{title}</p>
    </TextWrapper>
  </HeaderWrapper>
);

Header.propTypes = {
  paragraph: PropTypes.string,
  title: PropTypes.string,
};
