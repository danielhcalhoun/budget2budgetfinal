import React from "react";
import { Message } from "semantic-ui-react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <Message error style={{ marginBottom: "5px" }}>
        {touched && error}
      </Message>
    </div>
  );
};
