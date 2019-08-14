import React, { Component } from 'react';
import { connect } from 'react-redux';

import { onChangeName } from './actions/simpaleAction';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('event.target.value', event.target.value)
    this.props.onChangeName(event.target.value);
  }

  handleSubmit(event) {
    const { name } = this.props;
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    const { name } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Enter your name: </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={this.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.greeting}</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.simpleReducer.name
});

const mapDispatchToProps = dispatch => ({
  onChangeName: (value) => dispatch(onChangeName(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
