import React from "react";
import Head from "next/head";
import { END } from "redux-saga";
import axios from "axios";
import wrapper from "../store/configureStore";
import AppLayout from "../components/layout/AppLayout";
import LoginForm from "../components/form/LoginForm";

const Home = () => (
  <>
    <AppLayout>
      <Head>
        <title>Node Lab | 홈</title>
      </Head>
      <div>
        <LoginForm />
      </div>
    </AppLayout>
  </>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // 프론트 서버에 쿠키 넣어주기
    console.log("getServerSideProps start");
    console.log(context.req.headers);
    const cookie = context.req ? context.req.headers.cookie : "";
    // 브라우저에서 받은 요청에 쿠키가 있을 때만 넣어주기
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }

    // dispatch가 끝났음을 알려줌
    context.store.dispatch(END);
    console.log("getServerSideProps end");
    // saga의 비동기 이벤트 설정
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
