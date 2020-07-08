import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Link href="/">
          <a>노드버드</a>
        </Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
