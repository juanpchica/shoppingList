import React from "react";
import HForm from "./HForm";

//React Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormApp() {
  return (
    <div className='form-container'>
      <HForm />
      <Form onSubmit={sendForm}>
        <Form.Group className='mb-3'>
          <Form.Label>Product Name:</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Product Name'
            name='productName'
            value={product.name}
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Price $: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Price: '
            name='productValue'
            value={product.value}
            onChange={(e) => {
              setProduct({ ...product, value: e.target.value });
            }}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          {isEditing ? "Update Item" : "Add Item"}
        </Button>
      </Form>
    </div>
  );
}

export default FormApp;
