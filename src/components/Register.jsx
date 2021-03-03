import axios from "axios";
import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function Register() {

  const [validated, setValidated] = useState(false);
  const [input, setInput] = useState({  })

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === false) {
      return event.stopPropagation();
    }
    console.log(input)
    try {
      const { data } = await axios.post('http://localhost:4000/api/usuarios', input);
      localStorage.setItem('token', data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedInput = { ...input, [name]: value };
    setInput(changedInput);
  }

  return (
    <div className='container mt-5'>
      <h1>Formulario de Registro</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="card p-5 mt-5" style={{ maxWidth: '400px' }}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="nombre"
            onChange={ (e) => handleChange(e) }
            required
            type="text"
            placeholder="First name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            onChange={ (e) => handleChange(e) }
            required
            type="text"
            placeholder="Last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              minlength='6'
              name="password"
              onChange={ (e) => handleChange(e) }
              type="password"
              placeholder="****"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Password is required and the length should be 6 at least!
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>



    </div>
  )
}
