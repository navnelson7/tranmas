import React, { useState } from 'react';
import { InputGroup, FormControl, Col } from 'react-bootstrap';
import { useQuery } from 'apollo-client';
import { getDepartamentos } from '../../graphql/Queries';
const ListBoxDepartamentos = ({ changeDepartamentos }) => {
    const [deptos, setDepartamentos] = useState([{
        id: '',
        departamentos: ''
    }]);

    const {
        id,
        departamentos
    } = deptos



    return (

    );
}

export default ListBoxDepartamentos;