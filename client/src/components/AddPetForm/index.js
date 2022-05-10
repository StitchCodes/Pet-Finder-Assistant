import React, { Component } from "react";
import {
  Container,
  Form,
  Button,
  Segment,
  Grid,
  GridColumn,
  Image,
  Divider,
} from "semantic-ui-react";
import PetBackground from "../../assets/images/pets.png";
import Autocomplete from "react-google-autocomplete";


const options = [
  { key: "d", text: "Dog", value: "dog" },
  { key: "c", text: "Cat", value: "cat" },
  { key: "o", text: "Other", value: "other" },
];

class addPetForm extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });
  handleDropdownChange (e, data) {
    const { name, value } = data
  }

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Segment>
          <Grid columns={2} relaxed="very">
            <GridColumn>
              <Image src={PetBackground} />
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
                  <label>Place where the pet was last seen</label>
                  <Autocomplete
                  apiKey={'AIzaSyAm_8uIOHe0Gr1lpNueCHZOcawTLEvWfno'}
                  onPlaceSelected={(place) => {
                    console.log(place);
                  }}
                />
                <Button primary>Add Photo</Button>
                <Button>Submit</Button>
              </Form>
            </Grid.Column>
          </Grid>
          <Divider vertical></Divider>
        </Segment>
      </Container>
    );
  }
}


export default addPetForm;

