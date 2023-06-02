import PropTypes from 'prop-types';
import React from "react";
import '../styles/BookList.css';
import skelet from '../assets/No.jpg'

 function BookList({booksStorage,setSelectedBook}) {

    const res = booksStorage?.map(el => {
        return (
          <div className="card" onClick={() => setSelectedBook(el)} key={el.etag}>
            <img src= {el.volumeInfo.imageLinks?.smallThumbnail === undefined ?  skelet : el.volumeInfo.imageLinks?.smallThumbnail} alt={el.id} />
            <div className="CardTextCategories">
              <p>{el.volumeInfo.categories}</p>
            </div>
            <div className="bookTitle">
            <p>{el.volumeInfo.title}</p>
            </div>
            <div className="CardTextAuthors">
            <p>{el.volumeInfo.authors}</p>
            </div>
          </div>
        )
      })

    return (
        <div className="result">
            {res}
        </div>
    )
}

export default BookList;
BookList.propTypes = {
  booksStorage: PropTypes.array,
  setSelectedBook: PropTypes.func
}