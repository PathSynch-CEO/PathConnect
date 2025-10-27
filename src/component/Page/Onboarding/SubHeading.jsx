import "./styles.scss";
import PropTypes from "prop-types";
import React, { memo } from "react";

const SubHeading = memo(function SubHeading(props) {
  // Fix 1: Set default values to prevent errors if props are not passed.
  const { headingText, categoryText = "", className, style = {} } = props;
  
  return (
    <React.Fragment>
      <h4 className={`fw-bold subHeading ${className}`}>
        {headingText}
        {/* This will now render a clean space if categoryText is not provided */}
        <span
          className="textYellow"
          // Fix 2: Correctly merge the incoming style object
          style={{ ...style, textTransform: "camelCase" }}
        >
          {` ${categoryText}`}
        </span>
      </h4>
    </React.Fragment>
  );
});

SubHeading.propTypes = {
  headingText: PropTypes.string,
  categoryText: PropTypes.string,
  className: PropTypes.string,
  // Changed from 'any' to 'object' for better type safety
  style: PropTypes.object,
};

export default SubHeading;