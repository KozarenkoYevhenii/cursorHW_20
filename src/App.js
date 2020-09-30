import React from "react";
import Homepage from "./components/homepage/homepage";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  );
}

export default App;
