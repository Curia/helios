import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GlobalHeader } from '../GlobalHeader';

export default {
  title: `Layout/Global Header`,
  component: GlobalHeader,
} as ComponentMeta<typeof GlobalHeader>;

const Template: ComponentStory<typeof GlobalHeader> = (args) => (
  <GlobalHeader {...args} />
);

/* export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

*/

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
