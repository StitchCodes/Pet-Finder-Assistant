import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADDPLACARD } from '../utils/mutations';
import { Container, Form, Button, Segment, Grid, GridColumn, Image, Divider } from "semantic-ui-react";
import PetBackground from "../assets/images/pets.png";
import Auth from '../utils/auth';

const AddPetForm = () => {

  const options = [
    { key: "d", text: "Dog", value: "dog" },
    { key: "c", text: "Cat", value: "cat" },
    { key: "o", text: "Other", value: "other" },
  ];
  const [formState, setFormState] = 
  useState({
    petAuthor: '',
    location: '', 
    petName: '', 
    petSpecies: '', 
    petGender: '', 
    petColor: '', 
    petDesc: '', 
    petDateLF: '', 
    petStatus: '', 
    petPhoto:'', 
    petReward: ''
  });
  const [validated] = useState(false);

  const [ addPlacard ] = useMutation(ADDPLACARD);

  // const token = Auth.loggedIn() ? Auth.getToken() : null;

  // if (!token) {
  //   alert("need to be logged in to add a pet");
  //   return false;
  // }
  // const placardAuthorData = Auth.getUser().data._id;
  // setFormState({...formState, placardAuthor: placardAuthorData});


  // Update form state on Input for addPlacard
  const handleChange = (event) => {
    const {name, value} = event.target;
   
      // event.preventDefault();
      // event.stopPropagation();

    setFormState({ ...formState, [name]: value});
  };
  
  
  // Submit Form function for addPlacard
  const handleFormSubmit = async (event) => {
    try {
      alert("click on the submit button");
      const {data} = await addPlacard({
        variables: { ...formState}
      });
      if (!data) {
        throw new Error('something went wrong!');
      }
    } catch (e) {
      console.error(e);
    }
  };
 
  return (
  <Container>
  <Segment>
    <Grid columns={2} relaxed="very">
      <GridColumn>
        <Image src={PetBackground} />
      </GridColumn>

      <Grid.Column>
        <Form > 
          <Form.Group>
            <Form.Field>
              <Form.Input 
                fluid label="Name" 
                placeholder="Name" 
                name="name" 
                //onChange={handleChange}
                />
            </Form.Field>

            <Form.Select 
               options={options} 
               placeholder="Species" 
               name="petSpecies" 
               //onChange={handleChange}
               />
          </Form.Group>

          <Form.Group inline>
            <label>Gender</label>
            <Form.Radio
              label="Male"
              name="petGender"
              value="sm"
              //onChange={handleChange}
            />
            <Form.Radio
              label="Female"
              name="petGender"
              value="md"
              //onChange={handleChange}
            />
          </Form.Group>

          <Form.TextArea
            label="Description"
            name="petDesc"
            placeholder="Small description about the pet"
            onChange={handleChange}
          />

          <Form.Field>
            <Form.Input 
            fluid label="Address where the pet was last seen" 
            placeholder="Name" 
            name="location" 
            onChange={handleChange}
            />
          </Form.Field>


          <Button id="submitButton" onSubmit={handleFormSubmit} >Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
    <Divider vertical></Divider>
  </Segment>
  </Container>
  )};

export default AddPetForm; 