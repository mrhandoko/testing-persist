import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { persistForm } from './persistForm';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        {
          this.props.formPersist !== '' ?
            <input type="text" placeholder="fill this redux & then refresh" onChange={event => this.props.persistForm(event.target.value)} value={this.props.formPersist} /> :
            <input type="text" placeholder="fill this redux & then refresh" onChange={event => this.props.persistForm(event.target.value)} defaultValue={this.props.formPersist} />
        }
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  formPersist: state.formPersist.formPersist,
})

const mapDispatchToProps = dispatch => bindActionCreators({ persistForm }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
