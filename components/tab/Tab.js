import React from "react";
import PropTypes from "prop-types";
import styles from "./Tab.module.scss";

export default function Tab({ children, ...props }) {
  return (
//html 코드 넣어야 함
<>
    <div>tab</div>
    <div></div>
</>
  );
}

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};
