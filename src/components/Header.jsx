import React, { useEffect, useState } from "react";

function Header(props) {
  const [inputValue, setInputValue] = useState('');

  return (
    <header>
      <div className="inputSearchField">
        <label className="textInputBook" for="site-search">Search for books</label>
        <input onKeyDown={(e) => {
          if (e.key === "Enter") props.fetchBooks(inputValue)
        }} onChange={(e) => setInputValue(e.target.value)} type="search" id="books-search" name="q" />
      </div>
      <div className="selectorSort">
        <label className="textInputCategories" for="site-search">Categories</label>
        <select className="selectCategories">
          <option selected value="All">All</option>
          <option value="art">art</option>
          <option value="biography">biography</option>
          <option value="computers">computers</option>
          <option value="history">history</option>
          <option value="medical">medical</option>
          <option value="poetry">poetry</option>
        </select>
        <label className="textInputCategories" for="site-search">Sorting by</label>
        <select className="selectCategories">
          <option selected value="relevance">relevance</option>
          <option value="newest">newest</option>
        </select>
      </div>
      <div className="totalItem">
        <p>Find {props.booksList.totalItems} results</p>
      </div>
    </header>
  );
}

export default Header;
