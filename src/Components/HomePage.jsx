import React from 'react';
import '../HomePage.css';

const HomePage = () => {
    return(
        <main>
            <div className="hero">
                
                <h1>Tasty</h1>

                <p className='browse-recipes'>Browse recipes</p>
            </div>
            <div><h2>Looking for recipes?</h2></div>
            <div className='homepage-cards-container'>
                <div className='homepage-card'>
                    <h3>Browse recipes</h3>
                    <p>Find your favourites in this collection. You can search recipes based on name or country.</p>
                </div>
                <div className='homepage-card'>
                    <h3>Browse recipes</h3>
                    <p>Find your favourites in this collection. You can search recipes based on name or country.</p>
                </div>
                <div className='homepage-card'>
                    <h3>Browse recipes</h3>
                    <p>Find your favourites in this collection. You can search recipes based on name or country.</p>
                </div>

            </div>
        </main>
    )
}

export default HomePage;