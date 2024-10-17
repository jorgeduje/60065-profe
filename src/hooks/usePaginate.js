import { useState } from "react";

export const usePaginate = (array) => {
  // 103
  // siempre se corte de 10 a 10
  // 11
  const [currentPage, setCurrentPage] = useState(2);
  let totalPages = Math.ceil(array.length / 10);

  const arrayCortado = array.slice(10 * (currentPage - 1), 10 * currentPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return { arrayCortado, nextPage, prevPage, currentPage };
};

// usePaginate([100])
// usePaginate([22])
// usePaginate([105])

// Math.floor(2.7); // ---> 2
// Math.round(2.8); // ---> 3
// Math.ceil(2.2); // 3
// slice

// ["a", "b", "c", "d", "e"].slice( 10, 20 ) // devuelve un array []
