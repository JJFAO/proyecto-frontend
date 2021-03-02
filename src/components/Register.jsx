import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function Register() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <div className='container mt-5'>
      <h1>Formulario de Registro</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit} className="card p-5 mt-5" style={{ maxWidth: '400px' }}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="****"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      <Button type="submit">Enviar</Button>
    </Form>



    </div>
  )
}
