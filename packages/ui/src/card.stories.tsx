import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Card } from "./card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  render: (args) => (
    <Card {...args}>
      Invite your team to review changes before they ship.
      <div className="mt-4"><Button size="sm">Invite</Button></div>
    </Card>
  ),
};

export default meta;

export const Default: StoryObj<typeof Card> = { args: { title: "Review together" } };
