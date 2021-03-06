import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters.js";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({
      calendarFocused
    }));
  };

  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input className="text-input"
              type="text"
              value={this.props.filters.text}
              placeholder="Search expenses"
              onChange={e => {
                this.props.dispatch(setTextFilter(e.target.value));
              }}
            />
          </div>
          <div className="input-group__item">
            <select className="select"
              value={this.props.filters.sortBy}
              onChange={e => {
                switch (e.target.value) {
                  case "amount":
                    this.props.dispatch(sortByAmount());
                    break;
                  case "date":
                    this.props.dispatch(sortByDate());
                    break;
                }
              }}
            >
              <option value="amount">Amount</option>
              <option value="date">Date</option>
          </select>
          </div>
            <div className="input-group__item">
              <DateRangePicker
              startDate={this.props.filters.startDate}
              startDateId={"123455"}
              endDate={this.props.filters.endDate}
              endDateId={"3848765"}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { filters: state.filters };
};

export default connect(mapStateToProps)(ExpenseListFilters);
