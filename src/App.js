import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect } from 'react-redux'
import {fetchUser} from './action/userAction'


/* store.subscribe(()=> {
  console.log("store changed" , store.getState())
})

store.dispatch({type:"CHANGE_NAME",payload:"WILL"})
store.dispatch({type:"CHANGE_AGE",payload:25}) */

class App extends Component {
  componentWillMount(){
    this.props.dispatch(fetchUser())
  }
  render() {
    console.log("fetch redux", this.props.user )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default (connect((store) => {
  return{
    user:store.userReducer
  }
})) (App);
