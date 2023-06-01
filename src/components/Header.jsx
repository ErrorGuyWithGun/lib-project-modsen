import PropTypes from 'prop-types';
import React from "react";

function Header({fetchBooks,setTitle}) {
  return (
    <header>
      <div className="inputSearchField">
        <label className="textInputBook" htmlFor="site-search">Search for books</label>
        <input onKeyDown={(e) => {
          if (e.key === "Enter") fetchBooks()
        }} onChange={(e) => (setTitle(e.target.value))} type="search" id="books-search" name="q" />
      </div>

    </header>
  );
}

export default Header;
Header.propTypes = {
  fetchBooks: PropTypes.func,
  setTitle: PropTypes.func
}