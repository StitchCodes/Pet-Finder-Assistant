import React from 'react'
import {
  Form,
  Card,
} from 'semantic-ui-react';
        
const FilterForm = () => (
    <div>
        <Card>
          <Card.Content>
            <Form>
                <label> Filter pets by: </label>
                <Form.Group grouped>
                  <Form.Field label='Lost' control='input' type='checkbox' />
                  <Form.Field label='Found' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group >
                  <Form.Field label='Species' control='select'>
                    <option value='Male'>Dog</option>
                    <option value='Female'>Cat</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group >
                  <Form.Field label='Color' control='select'>
                    <option value='male'>Black</option>
                    <option value='female'>White</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field label='Gender' control='select'>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='female'>Unknown</option>
                  </Form.Field>
                </Form.Group>
                <Form.Group grouped>
                  <label>Date</label>
                  <Form.Field label='This week' control='input' type='checkbox' />
                  <Form.Field label='That month' control='input' type='checkbox' />
                </Form.Group>
                <Form.Field label='Last address seen' control='textarea' rows='3' />
                <Form.Field control='button'>
                    Filter
                </Form.Field>
              </Form>
            </Card.Content>
        </Card>
    </div>
)

export default FilterForm;