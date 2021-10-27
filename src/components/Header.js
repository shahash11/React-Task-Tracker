import Button from "./Button";
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>

      {/* <h1 style={{color: "red", backgroundColor: "blue"}}>{title}</h1>  */}
      {/* <h1 style={headingStyle} while grabing from the bottom */}
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
      />

      {/* the above code is used is passed in as a prop prop so changes needs to be made in the button component */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//CSS styling
const headingStyle = {
  color: "black solid",
  backgroundColor: "white",
};

// Header.proptypes = {
//   title: PropTypes.string.isRequired,
// };
export default Header;
