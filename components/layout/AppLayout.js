import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function AppLayout({ children }) {
  const { me } = useSelector((state) => state.user);
  return (
    <div>
      <div>
        {me}
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
