import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>BudgetApp</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Help page
        </NavLink>
      </li>
      <li>
        <NavLink to="/add" activeClassName="is-active">
          Add expense
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
