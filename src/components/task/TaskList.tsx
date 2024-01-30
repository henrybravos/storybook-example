import { useMemo } from "react";
import { RootState, updateTaskState } from "../../lib/store";
import TaskComponent, { EnumTaskState, ITask } from "./Task";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
// Selector original sin memoización
const originalSelector = (state: RootState) => state.taskbox;

// Selector de tareas con memoización utilizando reselect
export const tasksSelector = createSelector(originalSelector, (taskbox) => {
  const tasksInOrder = [
    ...taskbox.tasks.filter((t) => t.state === EnumTaskState.TASK_PINNED),
    ...taskbox.tasks.filter((t) => t.state !== EnumTaskState.TASK_PINNED),
  ];
  const filteredTasks = tasksInOrder.filter(
    (t) =>
      t.state === EnumTaskState.TASK_INBOX ||
      t.state === EnumTaskState.TASK_PINNED
  );
  return filteredTasks;
});

export interface TaskListProps {
  loading: boolean;
  tasks: ITask[];
  onPinTask: () => void;
  onArchiveTask: () => void;
}
export default function TaskList() {
  const tasks = useSelector(tasksSelector);

  const { status } = useSelector((state: RootState) => state.taskbox);

  const dispatch = useDispatch();

  const pinTask = (value: ITask) => {
    // We're dispatching the Pinned event back to our store
    dispatch(
      updateTaskState({ id: value.id, newTaskState: EnumTaskState.TASK_PINNED })
    );
  };
  const archiveTask = (value: ITask) => {
    // We're dispatching the Archive event back to our store
    dispatch(
      updateTaskState({
        id: value.id,
        newTaskState: EnumTaskState.TASK_ARCHIVED,
      })
    );
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );
  if (status === "loading") {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        <div className="wrapper-message">
          <span className="icon-check" />
          <p className="title-message">You have no tasks</p>
          <p className="subtitle-message">Sit back and relax</p>
        </div>
      </div>
    );
  }

  return (
    <div className="list-items" data-testid="success" key={"success"}>
      {tasks.map((task) => (
        <TaskComponent
          key={task.id}
          task={task}
          onPinTask={(task) => pinTask(task)}
          onArchiveTask={(task) => archiveTask(task)}
        />
      ))}
    </div>
  );
}
