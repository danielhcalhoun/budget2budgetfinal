import React from "react";
import { Message } from "semantic-ui-react";
import { Form } from "semantic-ui-react/dist/commonjs/collections/Form/Form";

export default ({ input, label, type, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type ? type : "text"}
        {...input}
        style={{ marginBottom: "5px" }}
      />
      <Message error style={{ marginBottom: "5px" }}>
        {touched && error}
      </Message>
    </div>
  );
};
