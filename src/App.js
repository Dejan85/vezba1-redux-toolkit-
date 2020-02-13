import React from "react";

// components
import Page from "./components/Page";

//redux
import reducer from "./slice/store";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//saga
import createSagaMiddleware from "redux-saga";
import { fetchData } from "./sagas/saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(fetchData);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
