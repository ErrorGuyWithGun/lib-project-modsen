import React, {useState}  from "react";
import Header from "./components/Header.jsx";

import './styles/App.css';
import BookList from "./components/BookList.jsx";
import Pagination from "./components/Pagination.jsx";

function App() {
  const [booksList, setBooks] = useState({});

  async function fetchBooks(e) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e}&maxResults=30&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
    .then(function(res) {
      return res.json();
    })
    .then(function(result) {
      console.log(result);
      setBooks(result);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      <Header booksList={booksList} fetchBooks={fetchBooks}/>
      <BookList booksList={booksList}/>
      <Pagination/>
    </div>
    

  );
}

export default App;
