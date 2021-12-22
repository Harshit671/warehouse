import { createStore } from "redux";
import rootReducers from "./reducer/reducer";

const store = createStore(rootReducers);

store.subscribe(() => store.getState());

export default store;
