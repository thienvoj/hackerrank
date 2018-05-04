import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, CardColumns } from 'reactstrap';
import Host from '../../components/Host/Host';
import './HostConfigurations.css';

class HostConfigurations extends Component {
    state = {
        hosts: [],
        error: false
    }

    componentDidMount () {
        axios.get( '?host=2' )
            .then( response => {
                const hosts = response && response["configurations"];
                if (hosts) {
                    this.setState({hosts: hosts});
                }
            } )
            .catch(error => {
                this.setState({error: true});
            });
    }

    render () {
        let hosts = null;

        if (this.state.error) {
            hosts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        } else if (this.state.hosts.length) {
            hosts = this.state.hosts.map(host => {
                let hostKey = `${host.hostname}-${host.port}`;
                return <Host
                    key={hostKey}
                    name={host.name}
                    hostname={host.hostname}
                    port={host.port}
                    username={host.username}
                />;
            });
        }

        return (
            <Container>
                <Row>
                    <CardColumns>
                        {hosts}
                    </CardColumns>
                </Row>
            </Container>
        );
    }
}

export default HostConfigurations;