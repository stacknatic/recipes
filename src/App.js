import React from "react";

import "./assets/css/App.css";
import Recipes from "./Components/Recipes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomePage from "./Components/HomePage";
import RecipeDetails from "./Components/RecipeDetails";
import RecipeForm from "./Components/RecipeForm";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add-recipe" element={<RecipeForm />} />
          <Route path="/recipes/:recipedetails" element={<RecipeDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
