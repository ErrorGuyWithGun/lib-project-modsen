import PropTypes from 'prop-types';
import React from "react";
import '../styles/BookPage.css';
import skelet from '../assets/No.jpg'

function BookPage({ setSelectedBook, selectedBook }) {
    return (
        <div className="book">
            <button onClick={() => setSelectedBook(null)} type="button">X</button>
            <p className="text">{selectedBook?.volumeInfo?.title}</p>
            <img className="thumbnail" src= {selectedBook.volumeInfo.imageLinks?.thumbnail === undefined ? skelet : selectedBook.volumeInfo.imageLinks?.thumbnail} alt={selectedBook.id} />
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