import React, { Component } from "react";
import { connectRange } from "react-instantsearch-dom";
import TextField from "@material-ui/core/TextField";
import { timeStampToShortDate, dateToUnixTs } from "../lib/date-helpers";

class DatePicker extends Component {
  state = { date: timeStampToShortDate(this.props.timestamp) };
  onChange = e => {
    const { type, value, name } = e.target;
    //Round up if this is the max and down if not
    const newTimestamp = dateToUnixTs(value, name == "max");
    this.setState({
      date: value,
      timestamp: newTimestamp
    });
    this.props.handleDateChange(name, newTimestamp);
  };
  render() {
    const { label, name, id } = this.props;
    const { date } = this.state;
    return (
      <TextField
        required
        id={id}
        name={name}
        label={label}
        type="date"
        value={date}
        onChange={this.onChange}
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}

const DateFilter = connectRange(DatePicker);

export default DateFilter;
