import React, { useState } from "react";
import HForm from "./HForm";

//React Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FormApp({ setProducts, setIsEditing, setEditID, products }) {
  const [product, setProduct] = useState({ id: "", name: "", value: "" });

  const sendForm = (e) => {
    e.preventDefault();
    if (product.name === "" || product.value === "") {
      alert("There are some empty fields!!");
    } else {
      if (isEditing) {
        const newProductList = products.map((item) => {
          if (item.id === editID) {
            return { ...item, name: product.name, value: product.value };
          }
          return item;
        });

        setProducts(newProductList);
        setIsEditing(false);
        setEditID(null);
      } else {
        const newProduct = { ...product, id: new Date().getTime().toString() };
        setProducts([...products, newProduct]);
      }
      setProduct({ id: "", name: "", value: "" });
    }
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
