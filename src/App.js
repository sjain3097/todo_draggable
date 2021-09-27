import "./styles.css";
import CreateTask from "./Create";
import { Tasks } from "./Tasks";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { appReducer } from "./Reducer";
import { Provider } from "react-redux";

export default function App() {
  const store = createStore(appReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <CreateTask />
        <div style={{ display: "flex" }}>
          <Tasks status="NEW" />
          <Tasks status="ACTIVE" />
          <Tasks status="COMPLETED" />
        </div>
      </Provider>
    </div>
  );
}
