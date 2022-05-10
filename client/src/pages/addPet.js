import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADDPLACARD } from '../utils/mutations';
import { Container, Form, Button, Segment, Grid, GridColumn, Image, Divider } from "semantic-ui-react";
import PetBackground from "../assets/images/pets.png";
import Auth from '../utils/auth';
import Datepicker from '../components/DatePicker';

const AddPetForm = () => {

  const SpeciesOptions = [
    { key: "d", text: "Dog", value: "dog" },
    { key: "c", text: "Cat", value: "cat" },
    { key: "o", text: "Other", value: "other" },
  ];

  const ColorOptions = [
    { key: "black", text: "Black", value: "black" },
    { key: "brown", text: "Brown", value: "brown" },
    { key: "cream", text: "Cream", value: "cream" },
    { key: "ginger", text: "Ginger", value: "ginger" },
    { key: "gray", text: "Gray", value: "gray" },
    { key: "white", text: "White", value: "white" },
    { key: "other", text: "Other", value: "other" },
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
    <Container style={{ marginTop: '8em', "margin-bottom": '6rem' }} >
  <Segment >
    <Grid columns={2} relaxed="very">
      <GridColumn verticalAlign='middle'>
        <Image src={PetBackground} />
      </GridColumn>

      <Grid.Column>
        <Form>
          <Form.Group inline >
              <label>Status</label>
              <Form.Radio
                label="Lost"
                name="petStatus"
                value="lost"
                onChange={handleChange}
              />
              <Form.Radio
                label="Found"
                name="petStatus"
                value="found"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Field>
              <Form.Input 
                fluid label="Name" 
                placeholder="Name" 
                name="name" 
                //onChange={handleChange}
                />
            </Form.Field>

            <Form.Select 
               fluid label="Species" 
               options={SpeciesOptions} 
               placeholder="Select" 
               name="petSpecies" 
               //onChange={handleChange}
             />

          <Form.Group inline>
            <label>Gender</label>
            <Form.Radio
              label="Male"
              name="petGender"
              value="male"
              onChange={handleChange}
            />
                
            <Form.Radio
              label="Female"
              name="petGender"
              value="female"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Select 
               options={ColorOptions} 
               placeholder="Species" 
               name="petColor" 
               onChange={handleChange}
          />

          <Form.TextArea
            label="Description"
            name="petDesc"
            placeholder="Small description about the pet"
            onChange={handleChange}
          />

        <Form.Field>
          <label>Date last seen:</label>
          <Datepicker
          name="petDateLF"
          onChange={handleChange} />
        </Form.Field>


          <Form.Field>
            <Form.Input 
            fluid label="Address where the pet was last seen" 
            placeholder="Name" 
            name="location" 
            onChange={handleChange}
            />
          </Form.Field>

          <Form.Field>
            <Form.Input 
            fluid label="Reward (Optional)" 
            placeholder="Reward" 
            name="petReward" 
            onChange={handleChange}/>
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