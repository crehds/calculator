import { Result } from '.';

export default {
  title: 'Calculator/Result',
  component: Result,
};

const Template = (args) => <Result {...args} />;
export const Default = Template.bind({});
Default.args = { children: 0 };
