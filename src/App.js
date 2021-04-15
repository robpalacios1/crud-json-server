import React, { Fragment } from "react";
import CrudApi from "./components/CrudApi";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    <Fragment>
      <h1>Ejercicio</h1>
      <hr />
      <CrudApi />
      <hr />
      <CrudApp />
    </Fragment>
  );
}

export default App;
