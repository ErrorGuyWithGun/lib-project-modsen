import React  from "react";

function Header() {

  return (
    <header>
      
        <div className="inputSearchField">      
            <label className="textInputBook" for="site-search">Search for books</label>
            <input type="search" id="books-search" name="q"/>
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
        
    </header>
  );
}

export default Header;
