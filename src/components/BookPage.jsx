import PropTypes from 'prop-types';
import React from "react";
import '../styles/BookPage.css';

function BookPage({ setSelectedBook, selectedBook }) {
    return (
        <div className="book">
            <button onClick={() => setSelectedBook(null)} type="button">X</button>
            <p className="text">{selectedBook?.volumeInfo?.title}</p>
            <img className="thumbnail" src= {selectedBook.volumeInfo.imageLinks?.thumbnail === null ? null : selectedBook.volumeInfo.imageLinks.thumbnail} alt={selectedBook.id} />
            <p className="text">Categories:{selectedBook.volumeInfo.categories}</p>
            <p className="textAuthors">Authors:{selectedBook.volumeInfo.authors}</p>
            <p className="text">Description:{selectedBook.volumeInfo.description}</p>
        </div>
    )
}

//

export default BookPage;
BookPage.propTypes = {
    setSelectedBook: PropTypes.func,
    selectedBook: PropTypes.object
}