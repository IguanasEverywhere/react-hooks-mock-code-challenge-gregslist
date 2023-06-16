import React, { useState } from 'react';

function Form({ addItem }) {

  const [formData, setFormData] = useState({
    description: '',
    image: '',
    location: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    addItem(formData);
  }

  function handleChange(e) {
    let name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} name="description" placeholder="description" type="text" value={formData.description}></input>
      <input onChange={handleChange} name="image" placeholder="image" type="text" value={formData.image}></input>
      <input onChange={handleChange} name="location" placeholder="location" type="text" value={formData.location}></input>
      <input type="submit"></input>
    </form>
  )
}

export default Form;