import { createStore } from "redux";
import { State, rootReducer } from "./reducer";

const initialState: State = {
  currentTab: 1,
  tabSize: 3
};

const store = createStore(rootReducer, initialState);

// const unsubscribe = store.subscribe(() => console.log(store.getState()));

// unsubscribe();

export default store;
