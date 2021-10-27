import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // so it doesn't actually submit to a page

    // doing little bit of validation
    if (!text) {
      alert(`please add a task`);
      return;
    }

    // if it passes then we gonna call on add and pass,
    onAdd({ text, day, reminder });

    //clearing the form again
    setText("");
    setDay("");
    setReminder(false);

    // we want it to be unchecked if it's false
  };

  //   we will add the onSubmit in the whole form after we get that prop onAdd in this component but we will modify it  first
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {/* //   which gonna gives us whatever typed in for , e.target.value */}
      </div>

      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          placeholder="Add Day and Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        {/* which gonna gives us whatever typed in for , e.target.value */}
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        {/* //   which gives either true of false value if it's checked as it's a check box */}
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};
export default AddTask;
