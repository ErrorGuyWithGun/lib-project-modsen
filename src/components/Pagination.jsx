import PropTypes from 'prop-types';
import React, { useState } from "react";
import '../styles/Pagination.css';

function Pagination({fetchBooksLoading}) {
    const [page, setPage] = useState(0);

    const nextPage = () => {
        setPage(page + 30)
        fetchBooksLoading(page)
    }

    
    return (
        <nav aria-label="pagination">
            <ul className="pagination">
                <li ><button onClick={nextPage}><span className="visuallyhidden">next set of pages</span><span aria-hidden="true">»</span></button></li>
            </ul>
        </nav>
    )
}

export default Pagination;
Pagination.propTypes = {
    fetchBooksLoading: PropTypes.func
}