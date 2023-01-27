import { PrismCodeBlock } from "~/components";

export const fence = {
  render: PrismCodeBlock,
  attributes: {
    content: { type: String },
    language: {
      type: String,
      description:
        "The programming language of the code block. Place it after the backticks.",
    },
  },
};
