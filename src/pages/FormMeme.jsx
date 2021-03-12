import axios from "axios";
import { useState } from "react";
import { Form, InputGroup, Row, Button} from "react-bootstrap";
import Header from "../components/Header";

export default function FormMeme({ token }) {
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
            await axios.post('http://localhost:4000/api/memes', input, { headers });
            alert('Meme creado con éxito!😁');

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
            <Header token={token}/>
            <h2 className="mt-5">Formulario Crear Meme</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="card mt-5 p-5 mx-auto" style={{width: '500px'}}>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        name="titulo"
                        onChange={(e) => handleChange(e)}
                        required
                        type="text"
                        placeholder="Meme"
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
                            placeholder="http://meme.jpg"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">Image is required!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Row>
                    <Button type="submit" className="mx-auto">
                        Crear Meme
                    </Button>
                </Row>
            </Form>
        </>
    );
}
