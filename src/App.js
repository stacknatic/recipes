import React, { useEffect } from "react";
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
import HomePage from "./Components/HomePage";

const App = () => {

    return (
      <div className="App">
        <BrowserRouter>
        <Header />
        <Routes>

        <Route path="" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add-recipe" element={<Input />} />
        
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

export default App;
