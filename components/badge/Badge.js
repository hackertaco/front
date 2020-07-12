import React from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.scss";

export default function Badge({ children, ...props }) {
  return (
      <>
        <div>Badge</div>
        <div></div>
      </>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};
