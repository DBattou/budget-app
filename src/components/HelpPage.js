import React from "react";
import { Link } from "react-router-dom";

const HelpPage = () => (
  <div>
    <p>
      <span>You can add expenses in </span>
      <Link to={"/add"}>Add expense</Link>
      <span> by filling the form.</span>
    </p>
    <p>
      <span>You can view the expenses list in </span>
      <Link to={"/"}>Dashboard</Link>
    </p>
    <p>
      <span>You can filter the expenses by using a keyword or by choosing StartDate - EndDate</span>
      <span>    Example: keyword = "Bill" startDate="11/01/2018" endDate="11/31/2018")</span>
    </p>
    <p>
      <span>You can sort the expenses by date or by amount</span>
    </p>
    <p>
      <span>Finally you can edit/remove expense by clicking an expense in  </span>
      <Link to={"/"}>Dashboard</Link>
    </p>
  </div>
)

export default HelpPage;
