import "./styles.scss";
import PropTypes from "prop-types";
import React, { memo } from "react";

const SubHeading = memo(function SubHeading(props) {
  const { headingText, categoryText, className, style } = props;
  return (
    <React.Fragment>
      <h4 className={`fw-bold subHeading ${className}`}>
        {headingText}
        <span
        className="textYellow"
          style={{ style, textTransform: "camelCase" }}
        >{` ${categoryText}`}</span>
      </h4>
    </React.Fragment>
  );
});

SubHeading.propTypes = {
  headingText: PropTypes.string,
  categoryText: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.any,
};

export default SubHeading;
