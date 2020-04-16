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
}

class CurrentTab extends React.Component<IProps, {}> {

  tabClick = (tab: number) => {
    this.props.setTab(tab);
    // this.props.onTabChange(tab);
  };

  render() {
    const { currentTab } = this.props;
    // TabList [1,2,3]
    const tabList: number[] = [1, 2, 3];
    return (
      <div className="tabContainer">
        {tabList.map((item: number) => {
          return (
            <div className="tab" key={item} onClick={() => this.tabClick(item)}>
              <svg className="icon" aria-hidden="true">
                {item === currentTab ? (
                  <use xlinkHref="#icon-cc-dot" />
                ) : (
                  <use xlinkHref="#icon-cc-dot-o" />
                )}
              </svg>
            </div>
          );
        })}
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
