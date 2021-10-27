import { FaTimes } from "react-icons/fa";
// using font awesome which is fan
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      {/* //if task.reminder is true then it's reminder but */}
      <h3>
        {" "}
        {task.text} {task.day}{" "}
        <FaTimes style={{ color: "red" }} onClick={() => onDelete(task.id)} />
      </h3>
    </div>
  );
};

export default Task;
