import PropTypes from 'prop-types';
import React from "react";
import '../styles/Selector.css';

function Selector({fetchBooks,setFilter})
{
    function changeQueryBySort(value) {
        fetchBooks("0", value)
    }

    function changeCategories(value)
    {
      setFilter(value);
    }
   
return (
    <div className="selectorSort">
    <label className="textInputCategories" htmlFor="site-search">Categories</label>
    <select onChange={(v) => changeCategories(v.target.value)} defaultValue={'All'} className="selectCategories">
      <option value="">All</option>
      <option value="art">art</option>
      <option value="biography">biography</option>
      <option value="computers">computers</option>
      <option value="history">history</option>
      <option value="medical">medical</option>
      <option value="poetry">poetry</option>
    </select>
    <label className="textInputCategories" htmlFor="site-search">Sorting by</label>
    <select onChange={(v) => changeQueryBySort(v.target.value)} defaultValue={'relevance'} className="selectCategories">
      <option value="relevance">relevance</option>
      <option value="newest">newest</option>
    </select>
    </div>
)
}
export default Selector;
Selector.propTypes = {
  fetchBooks: PropTypes.func,
  setFilter: PropTypes.func
}