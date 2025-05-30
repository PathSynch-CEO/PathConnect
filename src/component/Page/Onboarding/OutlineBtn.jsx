import "./BtnStyle.scss";
import { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const OutlineBtn = memo(function OutlineBtn(props) {
  const { className, text, handleOnClick, disabled = false } = props;
  return (
    <Button
      className={`OutlineBtn ${className}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
});

OutlineBtn.propTypes = {
  text: PropTypes.string,
  handleOnClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default OutlineBtn;
