import React from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/layout/AppLayout";
import { LOAD_MY_INFO_REQUEST } from "../../reducers/user";

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  const { me } = useSelector((state) => state.user);

  return (
    <AppLayout>
      <Head>
        <title>{`유저 : ${me.name}`}</title>
        <meta name="description" content="님의 게시글" />
        <meta property="og:title" content="님의 게시글" />
        <meta property="og:description" content="님의 게시글" />
        <meta
          property="og:image"
          content="https://source.unsplash.com/random"
        />
        <meta property="og:url" content={`https://localhost:3060/user/${id}`} />
      </Head>
      <div>불러온 유저 데이터</div>
      <div>{`이름 : ${me.name}`}</div>
      <div>{`나이 : ${me.age}`}</div>
    </AppLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();

    return { props: {} };
  }
);

export default User;
