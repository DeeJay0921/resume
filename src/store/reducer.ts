import { SET_TAB, ActionTypes } from "./actions";
import { combineReducers } from "redux";

// export type State = {
//   currentTab: number
// }

function setCurrentTab(currentTab: number = 1, action: ActionTypes): number {
  switch (action.type) {
    case SET_TAB: {
      return action.tab
    }
    default: {
      return currentTab;
    }
  }
}

export const rootReducer = combineReducers({
  currentTab: setCurrentTab,
});

export type State = ReturnType<typeof rootReducer>
