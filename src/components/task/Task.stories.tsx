import type { Meta, StoryObj } from "@storybook/react";
import Task, { EnumTaskState } from "./Task";

const meta = {
  component: Task,
  title: "Task",
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    task: {
      id: 1,
      title: "Test Task",
      state: EnumTaskState.TASK_INBOX,
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      id: 1,
      title: "Test Task",
      state: EnumTaskState.TASK_PINNED,
    },
  },
};
export const Archived: Story = {
  args: {
    task: {
      id: 1,
      title: "Test Task",
      state: EnumTaskState.TASK_ARCHIVED,
    },
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle: Story = {
  args : {
    task: {
      ...Default.args.task,
      title: longTitleString,
    },
  },
};
