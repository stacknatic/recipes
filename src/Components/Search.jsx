import React from "react";

const Search = (props) => {
  return (
    <form className="search-form">
      <fieldset>
        <legend>Search recipes</legend>

        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="enter recipe name"
          onChange={props.searchHandler}
        ></input>
      </fieldset>
    </form>
  );
};

export default Search;
