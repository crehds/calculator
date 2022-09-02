import { Icon } from './Icon';
import { back } from './iconsPaths/back';
import { cart } from './iconsPaths/cart';

const icons = { back, cart };
export default {
  title: 'Calculator/Icon',
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

export const Default = Template.bind({});
Default.args = { children: cart };
