import React, { Component } from 'react';
import { InfoUser, NameDiv, ConnectAgentDiv } from './style';

class AgentInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            greeting: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }


    render() {
        const { name, nameAgent, email, phone } = this.props.agent;
        return (
            <form>
                <div>stammm!!!</div>
                <InfoUser>
                    <NameDiv> {name} <br /> {nameAgent}</NameDiv>
                    <ConnectAgentDiv> {email} <br /> {phone}</ConnectAgentDiv>
                </InfoUser>
            </form>
        );
    }
}

export default AgentInfo;
