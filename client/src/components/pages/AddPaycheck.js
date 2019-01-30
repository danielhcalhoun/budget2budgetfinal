import React, { Component } from "react";
import { Container, Message } from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import Paycheck from "../forms/paycheck/Paycheck";
import { getCurrentPaychecks } from "../../actions/paycheckActions";
import queryString from "query-string";

class AddPaycheck extends Component {
  // componentDidMount() {
  //   let { query } = this.props.location;
  //   console.log(this.props.location.search);
  // }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values.name);
  }

  render() {
    const { currentPaychecks } = this.props;

    return (
      <Container>
        {currentPaychecks.paychecks.length >= 1 ? (
          ""
        ) : (
          <Message warning header="Enter your first paycheck to get started!" />
        )}
        <Paycheck />
      </Container>
    );
  }
}

function mapStateToProps({ currentPaychecks }) {
  return { currentPaychecks };
}

export default connect(mapStateToProps, { getCurrentPaychecks })(AddPaycheck);
