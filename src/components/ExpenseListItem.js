import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <span>{props.description}</span>
    </Link>
  </div>
);

export default ExpenseListItem;
