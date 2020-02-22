import React, { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  //   console.log(isSignedIn);
  //return isSignedIn ? <Dashboard /> : <Login signIn={setIsSignedIn} />;
  return (
    <div className="container-fluid text-center">
      <Switch>
        <Route
          path="/login"
          render={props => <Login {...props} signIn={setIsSignedIn} />}
        />
        <Route path="/signup" component={SignUp} />
        {/* <Route path="/app" component={Dashboard} /> */}
        <ProtectedRoute
          path="/app"
          isSignedIn={isSignedIn}
          exact
          component={Dashboard}
        />
        <Redirect to="/login" />
      </Switch>
    </div>
  );
};
export default App;
