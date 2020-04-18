import { SET_TAB, ActionTypes } from "./actions";
import { combineReducers } from "redux";
import {func} from "prop-types";

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

function tabSize (tabSize: number = 3): number {
  return tabSize;
}

export const rootReducer = combineReducers({
  currentTab: setCurrentTab,
  tabSize,
});

export type State = ReturnType<typeof rootReducer>
