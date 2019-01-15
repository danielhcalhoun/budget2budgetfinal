import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
import { Message } from "semantic-ui-react";

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
    const { input, meta: { touched, error } } = this.props;

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
            input.onChange(value); //call the onchange function from redux form
            this.handleChange(event, { name, value });
          }}
        />
        <Message error style={{ marginBottom: "5px" }}>
          {touched && error}
        </Message>
      </div>
    );
  }
}

export default DateTimeFormInline;
