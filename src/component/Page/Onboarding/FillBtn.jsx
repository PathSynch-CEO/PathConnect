import "./BtnStyle.scss";
import { memo } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const FillBtn = memo(function FillBtn(props) {
  const {
    className,
    text,
    handleOnClick,
    disabled = false,
    type = "button",
  } = props;

  return (
    <Button
      className={`fillBtn fw-bold ${className}`}
      onClick={handleOnClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </Button>
  );
});

FillBtn.propTypes = {
  text: PropTypes.string,
  handleOnClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default FillBtn;
