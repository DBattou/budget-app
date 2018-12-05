import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral"

numeral.locale("fr");

const ExpenseListItem = props => (
  <div>
    <div className="_content-container">
      <Link to={`/edit/${props.id}`}>
          <span>{props.description}</span>
      </Link>
      <span>
        {" (" + moment(props.createdAt)
          .locale("fr")
          .format("Do MMMM, YYYY") +")"}
      </span>
    </div>
    <p>{numeral(props.amount).format("$0,0.00")}</p>
  </div>
);

export default ExpenseListItem;
