import { Route } from "react-router-dom";
import React from "react";

const Routers = () => (
  <Route
    path="/board/:boardId"
    render={({match}) => (
      <div>board id {match.params.boardId} </div>
    )}
  />
);

export default Routers;
