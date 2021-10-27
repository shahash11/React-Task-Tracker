import AddTask from "./components/AddTask";
import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "feb 5 at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30",
      reminder: true,
    },

    {
      id: 3,
      text: "I am at home",
      day: "Feb 66 at theree",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    // if just seeinng not deleting
    // console.log("delete", id);

    // if deleting for sure

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    // just to print the id
    // console.log(id);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //ADD TASK
  // so we are doing this for submitting the form created in the addTask.js
  //  also need to pass the prop to the AddTask from this Appjs
  const addTask = (task) => {
    // console.log(task);

    const id = 100;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      {/* if you pass anythings in this Header below it's called the props and you need to write props in the Header.js */}

      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* below, showAddTask && means if the statement is true */}
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      {/* {tasks.length>0? <Tasks tasks={tasks} onDelete={deleteTask} />:"No tasks to show"} */}
    </div>
  );
}

export default App;
