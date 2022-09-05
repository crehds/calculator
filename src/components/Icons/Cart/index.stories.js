import { Cart } from '.';

export default {
  title: 'Calculator/Icons/Cart',
  component: Cart,
};

const Template = (args) => <Cart {...args} />;
export const Default = Template.bind({});

Default.args = {
  color: 'red',
  size: '50',
};
