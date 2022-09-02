import { Icon } from '.';
import { back } from '../iconsPaths/back';
import { cart } from '../iconsPaths/cart';

const icons = { back, cart };
export default {
  title: 'Calculator/Icons/IconWrapper',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    children: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          back: 'back',
          cart: 'cart',
        },
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Example = Template.bind({});
Example.args = { children: cart };
