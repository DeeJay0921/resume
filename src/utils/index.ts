import {RefObject} from "react";

export const animateCSS = (
  // ref: RefObject<HTMLElement>,
  element: string | Element,
  animationName: string | string[],
  callback?: Function
) => {
  let node: Element | null = null;
  if (typeof element === "string") {
    node = document.querySelector(element)
  }else {
    node = element;
  }
  if (typeof animationName === "string") {
    node?.classList.add("animated", animationName);
  }else {
    for (const animationKey of animationName) {
      node?.classList.add("animated", animationKey);
    }
  }


  function handleAnimationEnd() {
    if (typeof animationName === "string") {
      node?.classList.remove("animated", animationName);
    }else {
      for (const animationKey of animationName) {
        node?.classList.remove("animated", animationKey);
      }
    }
    node?.removeEventListener("animationend", handleAnimationEnd);

    if (callback) {
      callback();
    }
  }

  node?.addEventListener("animationend", handleAnimationEnd);
};