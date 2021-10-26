import { state } from "./state";
import { initRouter } from "./router";

import "./components/text";
import "./components/button";
import "./components/stars";
import "./components/countdown";
//hands
import "./components/hands";
import "./components/hands/user-hands";
import "./components/hands/computer-hands";

(function () {
  state.init();
  const rootEl = document.querySelector(".container");
  initRouter(rootEl);
})();
