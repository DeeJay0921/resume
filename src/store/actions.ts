interface setTabAction {
  type: string;
  tab: number
}

export type ActionTypes = setTabAction;

export const SET_TAB = "SET_TAB";

export function setTab(tab: number): setTabAction {
  return { type: SET_TAB, tab }
}