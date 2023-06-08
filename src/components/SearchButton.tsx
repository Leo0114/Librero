import React from "react";

function SearchButton({ onClick }) {
  return (
    <button
      className="bg-indigo-700 px-4 py-2 rounded hover:bg-indigo-600"
      onClick={onClick}
    >
      Buscar
    </button>
  );
}

export default SearchButton;
