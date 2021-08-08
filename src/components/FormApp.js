import React, { useState } from "react";
import HForm from "./HForm";

//React Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Disptach or state
import { useProductsDispatch, useProductsState } from "../context/products";

function FormApp() {
  const dispatch = useProductsDispatch();
  const { product, isEditing } = useProductsState();

  const [productInputs, setProductInputs] = useState({
    id: "",
    name: "",
    value: "",
  });

  const sendForm = (e) => {
    e.preventDefault();
    if (productInputs.name === "" || productInputs.value === "") {
      alert("There are some empty fields!!");
    } else {
      if (isEditing) {
        dispatch({
          type: "ADD_EDIT_PRODUCT",
          payload: { ...productInputs, id: product.id },
        });
      } else {
        const newProduct = {
          ...productInputs,
          id: new Date().getTime().toString(),
        };
        dispatch({ type: "ADD_PRODUCT", payload: newProduct });
      }
    }
    setProductInputs({ id: "", name: "", value: "" });
  };

  const handleChange = (e) => {
    setProductInputs((inputs) => {
      return { ...inputs, [e.target.name]: e.target.value };
    });
  };

  if (isEditing) {
    setProductInputs(product);
  }

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
            value={productInputs.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Price $: </Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Price: '
            name='productValue'
            value={productInputs.value}
            onChange={handleChange}
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
