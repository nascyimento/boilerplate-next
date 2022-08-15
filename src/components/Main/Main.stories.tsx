import { Meta, Story } from "@storybook/react/types-6-0";
import Main, { MainProps } from ".";

export default {
   title: "Main",
   component: Main,
   args: {
      title: "Title Default",
      description: "Description Default",
   },
} as Meta;

export const Basic: Story = (args: MainProps) => <Main {...args} />;
