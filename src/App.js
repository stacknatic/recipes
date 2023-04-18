import React from 'react';
import { Component } from 'react';
import Preview from './Components/Preview';


import './App.css';
import './Modal.css'
import Input from './Components/Input';
import Modal from './Components/Modal';


class App extends Component{
  state ={
    showModal: false,
    fname: '',
    lname: '',
    phone: '',
    role: '',
    message: ''
  }
  modalHandler = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal
    })
  }

  fnameHandler = (e) => {

    this.setState({
      fname: e.target.value,
      // lname: lname.target.value
      // phone: e.target.value
    })
  }
  lnameHandler = (e) => {

    this.setState({
      lname: e.target.value,
      // lname: lname.target.value
      // phone: e.target.value
    })
  }
  // inputHandler = (e) => {

  //   this.setState({
  //     phone: e.target.value,
  //     // lname: lname.target.value
  //     phone: e.target.value
  //   })
  // }
  render(){

    return (
      
      <div className="App">

        <Input 
        fnameHandler = {this.fnameHandler}
        lnameHandler = {this.lnameHandler}
        submit = {this.modalHandler}
        // inputHandler = {this.inputHandler}
        
        />
        <Preview 
        fname={this.state.fname}
        lname={this.state.lname}
        // phone={this.state.phone}
        
        />
        {this.state.showModal && <Modal />}
        {/* <Modal /> */}
        
      </div>
    );
  }
}

export default App;
