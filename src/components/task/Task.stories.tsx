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
