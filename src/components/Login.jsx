import axios from "axios";
import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function Login({ setScreen, setToken }) {
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
            const { data } = await axios.post('http://localhost:4000/api/auth/login', input);
            localStorage.setItem('token', data);
            setToken(data);
            setScreen('Home');
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
        <>
            <h1>
                login
            </h1>

            <Form noValidate validated={validated} onSubmit={handleSubmit} className="card p-5 mt-5" style={{ maxWidth: '400px' }}>
                <Form.Group controlId="validationCustom02">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        onChange={(e) => handleChange(e)}
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
                            minLength='6'
                            name="password"
                            onChange={(e) => handleChange(e)}
                            type="password"
                            placeholder="****"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Password is required!
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Button type="submit">Enviar</Button>
            </Form>
        </>
    )
}

export default Login
