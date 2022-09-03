import { Key } from '.';

export default {
  title: 'Calculator/Key',
  component: Key,
  argTypes: {
    color: {
      options: ['white', 'gray-100'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Key {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: '1',
  color: 'gray-100',
};
