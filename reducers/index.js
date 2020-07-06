// redux ssr을 위해서 HYDRATE를 추가해야한다.
import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
