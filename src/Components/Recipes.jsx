import React from 'react';
import '../Recipes.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import { Link } from 'react-router-dom';

const Recipes = () => {
  const [recipes, setRecipes] = useState(
    
    
    {
      id: "",
      name: "",
      author: "",
      country: "",
      description: "",
      image: "",
      ingredients: [],
      instructions: "",
      loading: true,    
      data: []
    },
    
    
    );
    const [data, setData] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [searchInput, setSearchInput] = useState('');


  useEffect(() => {
    setIsLoading(true)

    axios.get("http://localhost:3015/posts/")
    .then(response => {setData(response.data); setRecipes(response.data);
    setIsLoading(false)})
  },[])

  if(isLoading){
    return <progress></progress>;

  }
  
  
  

  const Card = ({name, image}) => {
    return(

      <div className='recipes'>
       <img className='recipe-photo' src={image} />
       <h2>{name}</h2>                      
       <a className="see-more" href="#"> view full recipe</a>
      </div>


)
   }

   const searchInputHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const searchFilter = data.filter(recipe => {
    return recipe.name.includes(searchInput)
  })

   
   const TheRecipes = () => {
       const therecipes = searchFilter.map(recipe => {
           
          
            return (
               <Card 
               key = {recipe.id}
               id = {recipe.id}
               name = {recipe.name}
               image = {recipe.image}
               
               
               />
               )
            })
            return therecipes
        }

        
if(isLoading){
    return(
        
        <div className='preloader'>
        <progress></progress>
        </div>
)
}


       return(
        <body>
            <Search searchHandler = {searchInputHandler} />
        <main>

        <div className='recipes-container'>

            <TheRecipes />

        </div>
        </main>
        </body>
          
       )
   
}

export default Recipes