import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "../components/Header.js";
import NotFound from "../components/NotFound.js";
import HelpPage from "../components/HelpPage.js";
import EditPage from "../components/EditPage.js";
import ExpenseDashboardPage from "../components/ExpenseDashboard.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={ExpenseDashboardPage} exact={true} />
          <Route path="/expenses" component={ExpenseDashboardPage} />
          <Route path="/help" component={HelpPage} />
          <Route path="/edit" component={EditPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
