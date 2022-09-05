import { Header } from '.';

export default {
  title: 'Calculator/Header',
  component: Header,
  parameters: {
    margin: '0',
  },
};

export const Default = (args) => <Header {...args} />;

Default.args = {
  paragraph: 'Add expense to',
  title: 'Groceries',
};
