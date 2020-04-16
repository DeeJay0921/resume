import React from "react";
import CurrentTab from "../components/CurrentTab";
import Info from "../components/Info";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../store/reducer";
import { setTab } from "../store/actions";
import "slidePage/dist/slidePage.min.css";
// @ts-ignore
import SlidePage from "slidePage";

interface IProps {
  setTab: (tab: number) => void;
  currentTab: number;
}

// interface IState {
//   currentTab: number;
// }

class PCLayout extends React.Component<IProps, {}> {
  ref = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    new SlidePage();
  }

  render() {
    return (
      <div className="PCLayout">
        <div className="slide-container" id="slide-container">
          <div className="slide-page page1">
            <div className="container">
              <div className="hoverCard introBox">
                <Info />
              </div>
            </div>
          </div>
          <div className="slide-page page2">
            <div className="container">
              <h2>page2</h2>
              <p>page2 content</p>
            </div>
          </div>
        </div>
        <CurrentTab/>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => state;

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTab: (tab: number) => {
      dispatch(setTab(tab));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PCLayout);
