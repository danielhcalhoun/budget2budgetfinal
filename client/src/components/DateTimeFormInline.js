import React, { Component } from "react";
import { DateInput } from "semantic-ui-calendar-react";
import { Input, Message } from "semantic-ui-react";

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

    console.log(this.props);

    return (
      <div>
        <Input {...input} value={this.state.date} />
        <DateInput
          inline
          className="example-calendar-input"
          value={this.state.date}
          name="date"
          onChange={this.handleChange}
        />
        <Message error style={{ marginBottom: "5px" }}>
          {touched && error}
        </Message>
      </div>
    );
  }
}

export default DateTimeFormInline;
