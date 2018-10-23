import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Go home
        </NavLink>
      </li>
      <li>
        <NavLink to="/coucou" activeClassName="is-active">
          Go coucou
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Go help
        </NavLink>
      </li>
      <li>
        <NavLink to="/edit" activeClassName="is-active">
          Go edit
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
