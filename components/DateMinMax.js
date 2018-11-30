import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import { connectRange } from "react-instantsearch-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  timeStampToShortDate,
  dateToUnixTs,
  todayPlusDays
} from "../lib/date-helpers";

const styles = theme => ({
  // filters: {
  //   padding: `${theme.spacing.unit * 3}px 0`
  // }
});

class DateMinMax extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: dateToUnixTs(todayPlusDays(0)),
      max: dateToUnixTs(todayPlusDays(180))
    };
    const { searchState } = props;
    const { range } = searchState;
    if (range && range.end_date && range.end_date.min) {
      this.state.min = parseInt(range.end_date.min);
    }
    if (range && range.start_date && range.start_date.max) {
      this.state.max = parseInt(range.start_date.max);
    }
  }
  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: parseInt(value) });
  };
  render() {
    const { min, max } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <TimeStampFilter
          label="Start Date"
          attribute="end_date"
          name="min"
          value={min}
          defaultRefinement={{ min }}
          onChange={this.onChange}
        />
        <TimeStampFilter
          label="End Date"
          attribute="start_date"
          value={max}
          name="max"
          defaultRefinement={{ max }}
          onChange={this.onChange}
          up
        />
      </div>
    );
  }
}

export default DateMinMax;

class TimeStampField extends React.Component {
  state = {
    date: timeStampToShortDate(this.props.value)
  };
  handleDateChange = e => {
    const { name, value } = e.target;
    const ts = dateToUnixTs(value, this.props.up);
    if (ts) {
      this.props.refine({ [name]: ts });
      this.setState({ date: value });
      this.props.onChange({ target: { name, value: ts } });
    }
  };
  render() {
    const { name, label, classes } = this.props;
    const { date } = this.state;
    return (
      <TextField
        required
        type="date"
        label={label}
        value={date}
        name={name}
        onChange={this.handleDateChange}
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}
const TimeStampFilter = withStyles(styles, { withTheme: true })(
  connectRange(TimeStampField)
);
