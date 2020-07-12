import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import "../../util/util.module.scss";
import { Normalize } from 'styled-normalize'

export default function AppLayout({ children }) {
  return (
    <>
      <Normalize />
      <header>
        <Link href="/">
          <a>헤드 부분</a>
        </Link>
      </header>
      <div>{children}</div>
    </>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
