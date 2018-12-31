import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";

class DateTimeFormInline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "",
      month: "",
      date: "",
      time: "",
      dateTime: "",
      datesRange: ""
    };
  }

  handleChange = (event, DateTimeFormHandleChangeData) => {
    const name = DateTimeFormHandleChangeData.name,
      value = DateTimeFormHandleChangeData.value;

    if (this.state.hasOwnProperty(name)) {
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    const {
      input,
      placeholder,
      defaultValue,
      meta: { touched, error }
    } = this.props;

    return (
      <div>
        <DateInput
          inline
          className="example-calendar-input"
          value={this.state.date}
          name="date"
          onChange={this.handleChange}
        />
        {touched && error && <span>{error}</span>}
      </div>
    );
  }
}

export default DateTimeFormInline;
