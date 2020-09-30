import { createStore } from "redux";
import postsReducer from "../reducers/postsReducer";

  
const store = createStore(postsReducer)

export default store;