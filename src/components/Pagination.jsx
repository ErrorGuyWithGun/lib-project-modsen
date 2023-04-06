import React from "react";

function Pagination()
{
    return(
    <nav aria-label="pagination">
    <ul class="pagination">
      <li><a href=""><span aria-hidden="true">«</span><span class="visuallyhidden">previous set of pages</span></a></li>
      <li><a href=""><span class="visuallyhidden">page </span>1</a></li>
      <li><a href="" aria-current="page"><span class="visuallyhidden">page </span>2</a></li>
      <li><a href=""><span class="visuallyhidden">page </span>3</a></li>
      <li><a href=""><span class="visuallyhidden">page </span>4</a></li>
      <li><a href=""><span class="visuallyhidden">next set of pages</span><span aria-hidden="true">»</span></a></li>
    </ul>
  </nav>
    )
}

export default Pagination;