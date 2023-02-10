import React from 'react';

import Checkbox from '../components/Checkbox';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'responsive/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Checkbox {...args} />;

export const CheckedCase = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckedCase.args = {
  checked: true,
};

export const UnCheckedCase = Template.bind({});
UnCheckedCase.args = {
  checked: false,
};
