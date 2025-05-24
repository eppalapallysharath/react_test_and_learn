import React from "react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

const schema = {
  title: "User Information",
  type: "object",
  required: ["name", "age", "gender", "location"],
  properties: {
    name: { type: "string", title: "Name" },
    age: { type: "number", title: "Age" },
    gender: {
      type: "string",
      title: "Gender",
      enum: ["Male", "Female", "Other"]
    },
    location: { type: "string", title: "Location" }
  }
};

const uiSchema = {
  age: {
    "ui:widget": "updown"
  },
  gender: {
    "ui:widget": "select"
  }
};

export default function SimpleForm() {
  const handleSubmit = ({ formData }) => {
    alert("Form submitted successfully!");
    console.log("Submitted data:", formData);
  };

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={handleSubmit}
      validator={validator} // ✅ required
    />
  );
}
