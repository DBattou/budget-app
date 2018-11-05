import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral"

numeral.locale("fr");

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <span>{props.description}</span>
    </Link>
    <p>{numeral(props.amount).format("$0,0.00")}</p>
    <p>
      {moment(props.createdAt)
        .locale("fr")
        .format("Do MMMM, YYYY")}
    </p>
  </div>
);

export default ExpenseListItem;
