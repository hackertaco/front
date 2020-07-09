import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { loginRequestAction } from "../../reducers/user";
import Button from "../button/Button";

export default function App() {
  // redux에서 dispatch할때 사용
  const dispatch = useDispatch();
  // nextjs에서 페이지 이동시 사용
  const router = useRouter();

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // reducer로 로그인 처리 보냄
    dispatch(loginRequestAction(data));
    reset();
    router.push("/user/1");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        ref={register({
          required: "required",
          pattern: {
            value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i,
            message: "Entered value does not match email format",
          },
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}

      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        ref={register({
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5",
          },
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <Button type="submit">SUBMIT</Button>
    </form>
  );
}
