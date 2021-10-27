// if you want to add buttons then this is the way
import PropTypes from "prop-types";
const Button = ({ color, text, onClick }) => {
  //   function onClick() {
  //     console.log(`click`);
  //   }
  return (
    //   can be done in the below mentioned but I am doing in the
    // <button onClick={onClick} style={{ color }} className="btn">
    //   {text}
    // </button>

    //can be done any of the two ways but this is the proptypes way of calling when things you want are mentioned in the Header component so also need Button.propTypes at the bottom
    <button onClick={onClick} style={{ color }} className="btn">
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steerblue",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
