import { Input } from "reactstrap";
import PropTypes from "prop-types";
import { memo, useState } from "react";
import styles from "./style.scss";
import InputMask from "react-input-mask";
import { GoEye, GoEyeClosed } from "react-icons/go";

const InputField = memo(function InputField(props) {
  const {
    placeholder,
    label,
    type,
    onChangeHandle,
    onBlurHandle,
    value,
    name,
    className,
    disabled,
    style,
    readOnly,
    rows,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className={`${styles.inputWrapper}`}>
      <p className={`mb-1 ${styles.label}`}>{label}</p>
      {type === "tel" ? (
        <InputMask
          mask="(999) 999-9999"
          value={value}
          onChange={onChangeHandle}
          onBlur={onBlurHandle}
          disabled={disabled}
        >
          {(inputProps) => (
            <Input
              {...inputProps}
              type="tel"
              placeholder={placeholder}
              name={name}
              style={style}
              className={`form-control-lg w-100 ${styles.inputDesign} ${className}`}
              rows={rows}
            />
          )}
        </InputMask>
      ) : (
        <Input
          type={
            type === "password"
              ? isPasswordVisible
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          name={name}
          style={style}
          min={type === "number" ? 0 : ""}
          step={type === "number" ? "any" : ""}
          className={`form-control-lg w-100 ${styles.inputDesign} ${
            type === "number" ? "remove-arrow" : ""
          } ${className}`}
          disabled={disabled}
          onChange={onChangeHandle}
          onBlur={onBlurHandle}
          value={value}
          rows={rows}
          readOnly={readOnly}
        />
      )}
      {type === "password" && (
        <div onClick={togglePasswordVisibility} className={styles.inputIcon}>
          {isPasswordVisible ? <GoEyeClosed /> : <GoEye />}
        </div>
      )}
    </div>
  );
});

InputField.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandle: PropTypes.any,
  type: PropTypes.string,
  onBlurHandle: PropTypes.any,
  value: PropTypes.any,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  rows: PropTypes.any,
  label: PropTypes.string,
};

export default InputField;
