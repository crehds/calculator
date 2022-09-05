import { Calendar } from '.';

export default {
  title: 'Calculator/Calendar',
  component: Calendar,
};

const Template = (args) => <Calendar {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: 'Thursday March, 10, 2022',
};
