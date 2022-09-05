import PropTypes from 'prop-types';
import { Icon } from '../Icon';
import { cart } from '../iconsPaths/cart';

export const Cart = ({ color, size }) => (
  <Icon color={color} size={size}>
    {cart}
  </Icon>
);

Cart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};
