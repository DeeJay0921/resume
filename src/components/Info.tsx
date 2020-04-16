import React from "react";
import "../styles/Info.scss";
import avatar from "../imgs/avatar.png";
import "animate.css";
import { animateCSS } from "../utils";

class Info extends React.Component {
  animateCSS = animateCSS;

  state = {
    isDetailInfoShow: "none",
  };

  render() {
    const { isDetailInfoShow } = this.state;
    return (
      <div className="info">
        <div
          className="avatar"
          onDragStart={(e) => this.preventDrag(e)}
          onClick={this.imgClick}
        >
          <img src={avatar} alt="avatar" className="avatarImg" />
        </div>
        <div className="detailInfo" style={{ display: isDetailInfoShow }}>
          <div className="line slashLine">
            <span>WEB</span>
            <span>/</span>
            <span>FrontEnd Developer</span>
          </div>
          <div className="line mainLine">
            <span>Hi. 我是杨斌</span>
            <span className="subText">一名学习路上的前端开发者</span>
          </div>
          <div className="line barLine">
            <span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-address" />
              </svg>
              陕西西安
            </span>
            <span className="bar">|</span>
            <span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-tel" />
              </svg>{" "}
              18710893545
            </span>
            <span className="bar">|</span>
            <span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-Mail" />
              </svg>
              <a href="mailto:1018805743@qq.com">invokery@foxmail.com</a>
            </span>
          </div>
          <div className="line btnLine">
            <div className="btn">
              <a className="clickZone" target="_blank"
                 rel="noopener noreferrer"
                 href="https://deejay0921.github.io/">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-ego-blog" />
                </svg>
                <span>博客</span>
              </a>
            </div>
            <div className="btn">
              <a className="clickZone" target="_blank"
                 rel="noopener noreferrer"
                 href="https://github.com/DeeJay0921">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-github1" />
                </svg>
                <span>Github</span>
              </a>
            </div>
            <div className="btn">
              <a className="clickZone" target="_blank"
                 rel="noopener noreferrer"
                 href="https://www.jianshu.com/u/5bf13bf170c4">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-weibiaoti-" />
                </svg>
                <span>简书</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  imgClick = () => {
    this.animateCSS(".avatarImg", "bounceIn");
  };

  componentDidMount(): void {
    this.animateCSS(".avatarImg", "rotateIn", () => {
      setTimeout(() => {
        this.setState({
          isDetailInfoShow: "flex",
        });
        this.fadeInLines();
      }, 1500);
    });
  }

  fadeInLines = () => {
    const nodes: NodeListOf<Element> = document.querySelectorAll(
      ".detailInfo .line"
    );
    nodes.forEach((node) => {
      this.animateCSS(node, "fadeInUp");
    });
  };

  preventDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e && e.preventDefault && e.preventDefault();
  };
}

export default Info;
