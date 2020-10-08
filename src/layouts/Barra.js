import React from 'react';
import { Nav } from 'react-bootstrap';

const Barra = () => {
    return ( 
        <Nav
            activeKey="/listado-empleados"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link href="/registro">registro</Nav.Link>
            </Nav.Item>
        </Nav>
     );
}
 
export default Barra;