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

  const sendForm = (e) => {
    e.preventDefault();
    if (product.name === "" || product.value === "") {
      alert("There are some empty fields!!");
    } else {
      if (isEditing) {
        dispatch({
          type: "ADD_EDIT_PRODUCT",
          payload: { ...product },
        });
      } else {
        const newProduct = {
          ...product,
          id: new Date().getTime().toString(),
        };
        dispatch({ type: "ADD_PRODUCT", payload: newProduct });
      }
    }
  };

  const handleChange = (e, name) => {
    let fieldValue = name === "productName" ? "name" : "value";
    dispatch({
      type: "SET_PRODUCT",
      payload: { name: fieldValue, value: e.target.value },
    });
  };

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
              handleChange(e, "productName");
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
              handleChange(e, "productValue");
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
