import React from 'react';
import { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Refrenda = (refrenda,id) => {
    return (
        <Fragment>
            <td>{refrenda.id}</td>
        </Fragment>
    );
}

export default Refrenda;