import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Title from "./components/Title";
import DragonList from "./components/DragonList";
import "./styles.css";
import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
