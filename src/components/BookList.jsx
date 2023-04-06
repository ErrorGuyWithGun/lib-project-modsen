import React from "react";

function BookList(props) {

    const res = props.booksList.items?.map(el => {
        return (
          <div className="Card" key={el.id}>
            <p>{el.volumeInfo.title}</p>
            <img src={el.volumeInfo.imageLinks?.smallThumbnail} alt={el.id} />
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