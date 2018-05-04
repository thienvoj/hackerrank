import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

import './Host.css';

const Host = (props) => (
    <div>
        <Card>
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.hostname}</CardText>
                <CardText>{props.port}</CardText>
                <CardText>{props.username}</CardText>
            </CardBody>
        </Card>
    </div>
);

Host.propTypes = {
    name:PropTypes.string,
    hostname:PropTypes.string,
    port:PropTypes.string,
    username:PropTypes.username
};

export default Host;