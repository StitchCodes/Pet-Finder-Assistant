import React from "react";
import { Form, Button } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const FormExampleFieldError = () => (
  <Form>
    <Form.Group widths="equal">
      <Form.Input fluid label="First name" placeholder="First name" error />
      <Form.Input fluid label="Last name" placeholder="Last name" />
    </Form.Group>
    <Form.Select options={options} placeholder="Gender" error />

    <Button>Submit</Button>
  </Form>
);

export default FormExampleFieldError;