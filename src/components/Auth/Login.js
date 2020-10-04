import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card, Form, Button} from 'react-bootstrap';
const Login = () => {
    return ( 
        <Fragment>
            <Container>
                <div className="abs-center">
                    <Card>
                        <Card.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="email" placeholder="usuario@correo.com"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password"></Form.Control>
                            </Form.Group>
                            <Button variant="primary" size="lg" block>Ingresar</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </Fragment>
     );
}
 
export default Login;