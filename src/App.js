import React from "react";
import { Component } from "react";
import Preview from "./Components/Preview";
import axios from "axios";

import "./App.css";
import "./Modal.css";
import Input from "./Components/Input";
import Modal from "./Components/Modal";
import Recipes from "./Components/Recipes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RecipeCards from "./Components/RecipeCards";
import HomePage from "./Components/HomePage";

class App extends Component {
  state = {
    showModal: false,
    note: {
      fname: "",
      lname: "",
      phone: "",
      role: "",
      message: ""
    },
    data: []
  };
  

  componentDidMount(){
    axios.get("http://localhost:3015/posts/")
    .then(response => this.setState({data: response.data }))
    
  }
  

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  inputHandler = (e) => {
    this.setState({
      note:{
        ...this.state.note,
        [e.target.name]: e.target.value,
      }
    });
  };

  submitHandler = () => {
      axios.post("http://localhost:3015/posts/", this.state.note )
      .then(response => console.log('response',  response))
      .catch(error => console.log('error', error))
      this.setState({
        showModal: false,
        note: {
          fname: '',
          lname: '',
          phone: '',
          role: '',
          message: ''
        },
      })
      // axios.get('http://localhost:3015/posts/').then(response => this.setState({ data: response.data }))

  }
  
  render() {
    console.log('new data: ' + this.state.data)

    const RecipeList = () => {
      const recipes = this.state.data.map((note) => {
        return (
          <div key={note.id}>
            <Recipes
              id={note.id}
              fname={note.fname}
              lname={note.lname}
              phone={note.phone}
              role={note.role}
              message={note.message}
            />
          </div>
        );
      });
      return recipes;
    };
  
    return (
      <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>

        <Route path="" element={<HomePage />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/add-recipe" element={<Input />} />
        
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
