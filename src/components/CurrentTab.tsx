import React from "react";
import "../styles/CurrentTab.scss";
import { connect } from "react-redux";
import { State } from "../store/reducer";
import { setTab } from "../store/actions";
import { Dispatch } from "redux";

interface IProps {
  // onTabChange: (tab: number) => void;
  setTab: (tab: number) => void;
  currentTab: number;
  tabSize: number;
}

class CurrentTab extends React.Component<IProps, {}> {

  tabClick = (tab: number) => {
    this.props.setTab(tab);
    // this.props.onTabChange(tab);
  };

  render() {
    const { currentTab, tabSize } = this.props;
    const elementList = [];
    for (let item = 1; item <= tabSize; item++) {
      elementList.push((
        <div className="tab" key={item} onClick={() => this.tabClick(item)}>
          <svg className="icon" aria-hidden="true">
            {item === currentTab ? (
              <use xlinkHref="#icon-cc-dot" />
            ) : (
              <use xlinkHref="#icon-cc-dot-o" />
            )}
          </svg>
        </div>
      ))
    }
    return (
      <div className="tabContainer">
        {elementList}
      </div>
    );
  }
}
const mapStateToProps = (state: State): State => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTab: (tab: number) => {
      dispatch(setTab(tab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTab);
