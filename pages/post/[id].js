import React from "react";
import { useSelector } from "react-redux";
import { END } from "redux-saga";
import Head from "next/head";
import { useRouter } from "next/router";

import axios from "axios";
import wrapper from "../../store/configureStore";
import AppLayout from "../../components/layout/AppLayout";
import { LOAD_POST_REQUEST } from "../../reducers/post";

const Post = () => {
  const { singlePost } = useSelector((state) => state.post);
  const router = useRouter();
  const { id } = router.query;

  return (
    <AppLayout>
      <Head>
        <title>{singlePost.title}</title>
        <meta name="description" content={singlePost.content} />
        <meta property="og:title" content={singlePost.title} />
        <meta property="og:description" content={singlePost.content} />
        <meta
          property="og:image"
          content="https://source.unsplash.com/random"
        />
        <meta property="og:url" content={`http://localhost:3060/post/${id}`} />
      </Head>
      <div>불러온 게시글 데이터</div>
      <div>{`제목 : ${singlePost.title}`}</div>
      <div>{`내용 : ${singlePost.content}`}</div>
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
      type: LOAD_POST_REQUEST,
      data: context.params.id,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
    return { props: {} };
  }
);

export default Post;
