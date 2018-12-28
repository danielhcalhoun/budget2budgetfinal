import React from "react";
import { Message, Form } from "semantic-ui-react";

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    <Form.Field>
      <label>{label}</label>
      <input
        type={type ? type : "text"}
        {...input}
        style={{ marginBottom: "5px" }}
      />
      <Message error style={{ marginBottom: "5px" }}>
        {touched && error}
      </Message>
    </Form.Field>
  );
};
