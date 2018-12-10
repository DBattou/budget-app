import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class ExpenseForm extends Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    note: this.props.expense ? this.props.expense.note : "",
    amount: this.props.expense ? this.props.expense.amount.toString() : "",
    createdAt: this.props.expense
      ? moment(this.props.expense.createdAt)
      : moment(),
    calendarFocused: false
  };

  handleChangeDescription = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  handleChangeNote = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  handleChangeAmount = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return { calendarFocused: focused };
    });
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Error /!\\ : Please provide description or amount !"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            className="text-input"
            type="text"
            autoFocus
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          <input
            className="text-input"
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.handleChangeAmount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => {
              return false;
            }}
          />
          <textarea
          className="textarea"
            placeholder="Add a note for your expense"
            value={this.state.note}
            onChange={this.handleChangeNote}
          />
          <button>Save expense</button>
        </form>
    );
  }
}

export default ExpenseForm;
