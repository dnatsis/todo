import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateScreen = () => {
  return (
    <Form>
      <Form.Group controlId="todoName">
        <Form.Label>Todo name</Form.Label>
        <Form.Control type="todoName" placeholder="Entet todo" />
      </Form.Group>

      <Form.Group controlId="todoDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="Enter todo description" />
      </Form.Group>

      <Form.Group controlId="todoDescription">
        <Form.Label>Priority</Form.Label>
        <Form.Control as="select">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateScreen;
