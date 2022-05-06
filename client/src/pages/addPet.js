import React from "react";
import { Form, Button, Segment, Grid, GridColumn } from "semantic-ui-react";

const options = [
  { key: "d", text: "Dog", value: "dog" },
  { key: "c", text: "Cat", value: "cat" },
  { key: "o", text: "Other", value: "other" },
];

const addPet = () => (
  <Segment>
    <Grid columns={2} relaxed="very">
      <GridColumn>
        <Image src="" />
      </GridColumn>

      <Grid.Column>
        <Form>
          <Form.Group>
            <Form.Field>
              <Form.Input fluid label="Name" placeholder="Name" error />
            </Form.Field>

            <Form.Select options={options} placeholder="Species" error />
          </Form.Group>

          <Form.Group inline>
            <label>Gender</label>
            <Form.Radio
              label="Male"
              value="sm"
              checked={value === "sm"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Female"
              value="md"
              checked={value === "md"}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.TextArea
            label="Description"
            placeholder="Small description about the pet"
          />

          <Form.Field>
            <label>Address where the pet was last seen</label>
            <input />
          </Form.Field>

          <Button primary>Add Photo</Button>

          <Button>Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
    <Divider vertical></Divider>
  </Segment>
);

export default addPet;
