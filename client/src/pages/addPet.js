import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADDPLACARD } from '../utils/mutations';
import { Container, Form, Button, Segment, Grid, GridColumn, Image, Divider } from "semantic-ui-react";
import PetBackground from "../assets/images/pets.png";
import Auth from '../utils/auth';
import Datepicker from '../components/DatePicker';
import Autocomplete from "react-google-autocomplete";

const AddPetForm = () => {

  const SpeciesOptions = [
    { key: "d", text: "Dog", value: "dog" },
    { key: "c", text: "Cat", value: "cat" },
  ];
  
  const statusOpt = [
    { key: 'L', text: "Lost", value: "lost"},
    { key: 'F', text: "Found", value: "found"},
  ];

  const genderOptions = [
    { key: "F", text: "Female", value: "female" },
    { key: "M", text: "Male", value: "male" },
  ];


  const ColorOptions = [
    { key: "black", text: "Black", value: "black" },
    { key: "brown", text: "Brown", value: "brown" },
    { key: "cream", text: "Cream", value: "cream" },
    { key: "ginger", text: "Ginger", value: "ginger" },
    { key: "gray", text: "Gray", value: "gray" },
    { key: "white", text: "White", value: "white" },
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
    petReward: '',
    petLastAddress: '',
  });

  const [ addPlacard ] = useMutation(ADDPLACARD);

  // Update form state on Input for addPlacard
  const handleChange = (event) => {
    const {name, value} = event.target;
    
    setFormState({ ...formState, [name]: value});
  };

  // Select handle
  const handleDropdownChange = (e, result) => {
    const { name, value } = result;
    
    setFormState({ ...formState, [name]: value});
  };
  // Submit Form function for addPlacard
  const handleFormSubmit = async (event) => {
    try {
      const placardAuthorData = Auth.getUser().data._id;
      setFormState({...formState, placardAuthor: placardAuthorData});
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
    <Container style={{ marginTop: '8em', "marginBottom": '6rem' }} >
  <Segment >
    <Grid columns={2} relaxed="very">
      <GridColumn verticalAlign='middle'>
        <Image src={PetBackground} />
      </GridColumn>

      <Grid.Column>
        <Form  onSubmit={handleFormSubmit} >
          {/* LOST OR FOUND */}
          <Form.Select 
               fluid label="Status" 
               options={statusOpt} 
               placeholder="Select" 
               name="petStatus" 
               onChange={handleDropdownChange}
             />
            {/* PET NAME */}
            <Form.Field>
              <Form.Input 
                fluid label="Name" 
                placeholder="Name" 
                name="petName" 
                onChange={handleChange}
                />
            </Form.Field>
            {/* PET SPECIES */}
            <Form.Select 
               fluid label="Species" 
               options={SpeciesOptions} 
               placeholder="Select" 
               name="petSpecies" 
               onChange={handleDropdownChange}
             />
          {/* PET GENDER */}
          <Form.Select 
            fluid label="Gender" 
            options={genderOptions} 
            placeholder="Select" 
            name="petGender" 
            onChange={handleDropdownChange}
          />

          {/* PET COLOR */}
          <Form.Select 
                label= "Color"
               options={ColorOptions} 
               placeholder="Color" 
               name="petColor" 
               onChange={handleDropdownChange}
          />
        {/* PET DESCRIPTION */}
          <Form.TextArea
            label="Description"
            name="petDesc"
            placeholder="Small description about the pet"
            onChange={handleChange}
          />
        {/* PET LAST SEEN */}
        <Form.Field>
          <label>Date last seen</label>
          <Datepicker
          name="petDateLF"
          />
        </Form.Field>
     {/* PET ADDRESS */}
          <Form.Field>
            <Form.Field>
              <label>Address where the pet was last seen</label>
                <Autocomplete
                apiKey={'AIzaSyAm_8uIOHe0Gr1lpNueCHZOcawTLEvWfno'}
                name="location"
                onChange={handleChange} 
              />
            </Form.Field>
          </Form.Field>
          {/* PET REWARD */}
          <Form.Field>
            <Form.Input 
            fluid label="Reward (Optional)" 
            placeholder="Reward" 
            name="petReward" 
            onChange={handleChange}/>
          </Form.Field>

          <Button id="submitButton">Submit</Button>
        </Form>
      </Grid.Column>
    </Grid>
    <Divider vertical></Divider>
  </Segment>
  </Container>
  )};

export default AddPetForm; 