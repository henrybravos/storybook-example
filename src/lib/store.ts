/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import {
  configureStore,
  createSlice,
  PreloadedStateShapeFromReducersMapObject,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { EnumTaskState, ITask } from "../components/task/Task";

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultTasks: ITask[] = [];
interface ITaskBoxData {
  tasks: ITask[];
  status: string;
  error: null | string;
}
export const TaskBoxData: ITaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};
export const fetchTasks = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?userId=1"
  );
  const data = await response.json();
  const result = data.map(
    (task: {
      id: number;
      title: string;
      state: EnumTaskState;
      completed: boolean;
    }) => ({
      id: `${task.id}`,
      title: task.title,
      state: task.completed ? "TASK_ARCHIVED" : "TASK_INBOX",
    })
  );
  return result;
});

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex(
        (task) => Number(task.id) === Number(id)
      );
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.tasks = [];
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.error = null;
        // Add any fetched tasks to the array
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong";
        state.tasks = [];
      });
  },
});

// The actions contained in the slice are exported for usage in our components
export const { updateTaskState } = TasksSlice.actions;

const reducer = {
  taskbox: TasksSlice.reducer,
};
const store = configureStore({
  reducer,
});
export function setupStore(
  preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>
) {
  return configureStore({ reducer, preloadedState });
}
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;

export default store;
