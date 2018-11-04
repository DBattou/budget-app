import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
numeral.register("locale", "fr", {
  delimiters: {
    thousands: " ",
    decimal: ","
  },
  abbreviations: {
    thousand: "k",
    million: "m",
    billion: "b",
    trillion: "t"
  },
  ordinal: function(number) {
    return number === 1 ? "er" : "ème";
  },
  currency: {
    symbol: "€"
  }
});
numeral.locale("fr");

const ExpenseListItem = props => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <span>{props.description}</span>
    </Link>
    <p>{numeral(props.amount).format("$0,0.00")}</p>
<<<<<<< HEAD
    <p>{moment(props.createdAt).format("Do MMMM, YYYY")}</p>
=======
    <p>
      {moment(props.createdAt)
        .locale("fr")
        .format("Do MMMM, YYYY")}
    </p>
>>>>>>> 6f2cb63be96192d70a282ea45b6f765bb94935c8
  </div>
);

export default ExpenseListItem;
