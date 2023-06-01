import React, { useState } from "react";
import Header from "./components/Header.jsx";

import './styles/App.css';


import BookPage from "./components/BookPage.jsx";
import BookList from "./components/BookList.jsx";
import Pagination from "./components/Pagination.jsx";
import Selector from "./components/Selector.jsx";
import TotalItem from "./components/TotalItem.jsx";

function App() {

  const [booksList, setBooks] = useState({});
  const [titleText, setTitle] = useState("");
  const [filter, setFilter] = useState("");
  const [booksStorage, setbooksStorage] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);


  async function fetchBooks(pageIndex = "0", orderBy = "relevance") {

    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleText}+subject:${filter}&maxResults=30&orderBy=${orderBy.toString()}&startIndex=${pageIndex.toString()}&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        console.log(result);
        setBooks(result);
        setbooksStorage(result.items);

      })
      .catch((err) => console.log(err))
  }

  async function fetchBooksLoading(pageIndex = "30", orderBy = "relevance") {
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleText}+subject:${filter}&maxResults=30&orderBy=${orderBy.toString()}&startIndex=${pageIndex.toString()}&key=AIzaSyCjChLr-FuUcTDw6qfFDfwi3dXm6RInYxU`)
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        console.log(result);
        setbooksStorage(booksStorage.concat(result.items));

      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="App">
      {(selectedBook) ? <BookPage selectedBook={selectedBook} setSelectedBook={setSelectedBook} /> :
        <>
          <Header setTitle={setTitle} fetchBooks={fetchBooks} />
          <Selector fetchBooks={fetchBooks} setFilter={setFilter} />
          <TotalItem booksList={booksList} />
          <BookList booksStorage={booksStorage} setSelectedBook={setSelectedBook} />
          {booksList.totalItems && <Pagination fetchBooksLoading={fetchBooksLoading} />}
        </>
      }
    </div>


  );
}

export default App;
