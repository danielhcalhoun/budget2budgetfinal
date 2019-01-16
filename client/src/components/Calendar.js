import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";

class Calendar extends Component {
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
    const { input } = this.props;

    return (
      <div>
        <DateInput
          {...input}
          inline
          className="example-calendar-input"
          value={this.state.date}
          dateFormat={"MM-DD-YYYY"}
          name="date"
          onChange={(event, { name, value }) => {
            this.handleChange(event, { name, value });
          }}
        />
      </div>
    );
  }
}

export default Calendar;
