import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToogle={onToggle}
        />

        // <div>
        //   <p>{task.id}</p>
        //   <p>{task.text}</p>
        //   <p>{task.day}</p>
        // </div>
      ))}
    </>
  );
};

export default Tasks;
