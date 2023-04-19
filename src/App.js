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
  
  inputHandler = (e) => {

    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value




    });
  }
  render(){

    return (
      
      <div className="App">

        <Input 
        submit = {this.modalHandler}
        inputHandler = {this.inputHandler}
        
        />
        <Preview 
        fname={this.state.fname}
        lname={this.state.lname}
        phone={this.state.phone}
        role={this.state.role}
        message={this.state.message}

        
        />
        {this.state.showModal && <Modal click={this.modalHandler} />}
        {/* <Modal /> */}
        
      </div>
    );
  }
}

export default App;
