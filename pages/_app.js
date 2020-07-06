import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";
import wrapper from "../store/configureStore";

// 각 페이지(index.js)의 return 부분이 Component에 들어간다.
const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Node Lab</title>
    </Head>
    <div>공통 메뉴</div>
    <Component />
  </>
);

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
