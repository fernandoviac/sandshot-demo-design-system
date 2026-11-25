import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Get started" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Cancel" } };
export const Danger: Story = { args: { variant: "danger", children: "Delete project" } };
export const Large: Story = { args: { size: "lg" } };
export const Toolbar: Story = {
  decorators: [(Story) => <div className="flex gap-2 rounded-lg bg-zinc-50 p-3"><Story /><Button variant="secondary">Later</Button></div>],
};
