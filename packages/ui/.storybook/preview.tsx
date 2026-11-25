import type { Preview } from "@storybook/react";
import "../src/styles.css";

// The theme global: Storybook's toolbar switches it; Sandshot records its default.
const preview: Preview = {
  globalTypes: {
    theme: { description: "Color theme", toolbar: { items: ["light", "dark"] }, defaultValue: "light" },
  },
  decorators: [
    (Story, context) => (
      <div className={context.globals.theme === "dark" ? "bg-zinc-900 p-4" : "bg-white p-4"} data-theme={context.globals.theme}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
