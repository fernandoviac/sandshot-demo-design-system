import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./hero";

const meta = { title: "Sections/Hero", component: Hero, args: { headline: "Ship UI with confidence", cta: "Start free" } } satisfies Meta<typeof Hero>;
export default meta;

export const Default: StoryObj<typeof meta> = {};
export const Short: StoryObj<typeof meta> = { args: { headline: "Review faster", cta: "Try it" } };
