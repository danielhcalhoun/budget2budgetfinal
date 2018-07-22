import React from "react";

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="error red-text" style={{ marginBottom: "5px" }}>
        {touched && error}
      </div>
    </div>
  );
};
