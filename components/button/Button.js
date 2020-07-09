import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

export default function Button({ children, ...props }) {
  return (
    <button
      type="button"
      // Note how the "error" class is accessed as a property on the imported
      // `styles` object.
      className={styles.error}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
