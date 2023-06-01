import PropTypes from 'prop-types';
import React from "react";

 function BookList({booksStorage,setSelectedBook}) {

    const res = booksStorage?.map(el => {
        return (
          <div className="Card" onClick={() => setSelectedBook(el)} key={el.etag}>
            <img src= {el.volumeInfo.imageLinks?.smallThumbnail === null ? null : el.volumeInfo.imageLinks.smallThumbnail} alt={el.id} />
            <div className="CardTextCategories">
              <p>{el.volumeInfo.categories}</p>
            </div>
            <p>{el.volumeInfo.title}</p>
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
  booksStorage: PropTypes.object,
  setSelectedBook: PropTypes.func
}