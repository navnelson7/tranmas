import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    const [usuario,guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();  
    }
 
    return ( 
        <Fragment>
            <Container>
                <div className="abs-center">
                    <Card>
                        <Card.Body>
                        <Form
                            onSubmit={onSubmit}
                        >
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="usuario@correo.com"
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="password"
                                    name="password"
                                    onChange={onChange}
                                    value={password}
                                ></Form.Control>
                            </Form.Group>
                            <Button variant="primary" size="lg" block>Ingresar</Button>
                        </Form>
                        <Link to='/nuevo-usuario'>
                            Usuario Nuevo
                        </Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default Login;