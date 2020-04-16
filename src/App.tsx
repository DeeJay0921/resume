import React from "react";
import PCLayout from "./pages/PCLayout";
import MobileLayout from "./pages/MobileLayout";
import "./App.scss";

interface IState {
  isMobile: boolean;
}

export default class App extends React.Component<{}, IState> {
  state = {
    isMobile: false,
  };

  render() {
    const { isMobile } = this.state;
    return (
      <div className="App">{isMobile ? <MobileLayout /> : <PCLayout />}</div>
    );
  }

  componentDidMount(): void {
    this.initLayoutByClientWidth();
  }

  /**
   * 根据页面宽度 渲染不同的页面
   */
  initLayoutByClientWidth = () => {
    const clientWidth: number = document.body.clientWidth;
    if (clientWidth >= 768) {
      this.setState({
        isMobile: false,
      });
    } else {
      this.setState({
        isMobile: true,
      });
    }
  };
}
