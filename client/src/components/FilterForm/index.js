import React from 'react'
import {
  Form,
  Card,
} from 'semantic-ui-react';
import Autocomplete from "react-google-autocomplete";
        
const FilterForm = () => (
    <div>
        <Card fluid>
          <Card.Content>
            <Form>
                <label> Filter pets: </label>
                
                <label><strong>Last address seen</strong></label>
                <Autocomplete
                  apiKey={'AIzaSyAm_8uIOHe0Gr1lpNueCHZOcawTLEvWfno'}
                  onPlaceSelected={(place) => {
                    console.log(place);
                  }}
                />
                <Form.Field control='button'>
                    Filter
                </Form.Field>
              </Form>
            </Card.Content>
        </Card>
    </div>
)

export default FilterForm;