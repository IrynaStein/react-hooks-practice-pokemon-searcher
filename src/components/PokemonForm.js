import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddNew}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  function handleChange(e){
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }
console.log(formData)

  function handleSubmit(e){
    e.preventDefault()
    onAddNew(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" value={formData.name} />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" value={formData.hp}/>
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"//this is going to cause problems with post
            value={formData.frontUrl}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
