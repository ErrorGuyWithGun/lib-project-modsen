import PropTypes from 'prop-types';
import React from "react";
import '../styles/TotalItem.css';

function TotalItem({booksList})
{
    return(
        <div className="totalItem">
          {booksList.totalItems && <p>Find {booksList.totalItems} results</p>}
        </div>
        )
}
export default TotalItem;
TotalItem.propTypes = {
    booksList:PropTypes.object
}