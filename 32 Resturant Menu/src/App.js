import React from "react";
import Categories from "./Categories";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/categories">
        <Categories />
      </Route>
    </div>
  );
}

export default App;
