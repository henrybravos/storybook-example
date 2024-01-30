import InboxScreen from "./InboxScreen";
import store from "../lib/store";
import { http, HttpResponse, delay } from "msw";
import { MockedState } from "./task/TaskList.stories";
import { Provider } from "react-redux";
import { Meta, StoryObj } from "@storybook/react";

import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from "@storybook/test";

const meta = {
  component: InboxScreen,
  title: "InboxScreen",
  //tags: ["autodocs"],
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} satisfies Meta<typeof InboxScreen>;

export default meta;
type Story = StoryObj<typeof InboxScreen>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://jsonplaceholder.typicode.com/todos",
          ({ request }) => {
            return HttpResponse.json(MockedState.tasks);
          }
        ),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  },
};

export const ErrorGet: Story = {
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],

  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://jsonplaceholder.typicode.com/todos",
          async ({ request }) => {
            await delay(500);

            return HttpResponse.error();
          }
        ),
      ],
    },
  },
};
