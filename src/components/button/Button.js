import "../../App.css";
import PropTypes from "prop-types";

export const Button = ({ onSubmit }) => {
  return (
    <button className="Button" type="Submit" onClick={onSubmit}>
      load more
    </button>
  );
};

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
