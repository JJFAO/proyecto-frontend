import axios from 'axios';
import { useState } from 'react';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';

export default function FormUser({ token }) {
    const [validated, setValidated] = useState(false);
    const [input, setInput] = useState({});

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === false) {
            return event.stopPropagation();
        }
        try {
            const headers = { 'x-auth-token': token };
            await axios.put('http://localhost:4000/api/usuarios/usuarioLogueado', input, { headers });
            alert('Datos actualizados con éxito!😁');
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const changedInput = { ...input, [name]: value };
        setInput(changedInput);
    };

    return (
        <>
            <h2 className="mt-5">Editar datos</h2>
            <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="card mt-5 p-5 mx-auto"
                style={{ width: '500px' }}
            >
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="nombre"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="rick.."
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                    <Form.Label>Imagen</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            name="imagen"
                            onChange={(e) => handleChange(e)}
                            type="text"
                            placeholder="http://imagen.jpg"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Image is required!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button variant="info" type="submit" className="mx-auto">
                        Actualizar datos
                    </Button>
                </Row>
            </Form>
        </>
    );
}
