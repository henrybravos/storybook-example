export enum EnumTaskState {
  TASK_INBOX = "TASK_INBOX",
  TASK_PINNED = "TASK_PINNED",
  TASK_ARCHIVED = "TASK_ARCHIVED",
}
export interface ITask {
  id: number;
  state: EnumTaskState;
  title: string;
}

export interface TaskComponentProps {
  task: ITask;
  onArchiveTask: (id: ITask) => void;
  onPinTask: (id: ITask) => void;
}
const Task = ({ task, onArchiveTask, onPinTask }: TaskComponentProps) => {
  const { state, id, title } = task;
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checked"
        aria-label={`archiveTask-${id}`}
        className="checkbox"
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === EnumTaskState.TASK_PINNED}
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(task)} />
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder="Input title"
          style={{ backgroundColor: 'red' }}
        />
      </label>

      {state !== EnumTaskState.TASK_ARCHIVED && (
        <button
          className="pin-button"
          onClick={() => onPinTask(task)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};
export default Task;
