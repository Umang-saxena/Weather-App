import React, { useState } from 'react';
import './SearchBar.css'; // Import your CSS for styling

const SearchBar = (props) => {
  // props Destructuring
  const {setsearch} = props;

  // States Used
  const [input, setInput] = useState("");

  // Handling Search Button
  const handleSearch=()=>{
    setsearch(input);
  }
  


  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={ input }
        onChange={(e)=>{setInput(e.target.value)}}
      />
      <button className="search-button" onClick={handleSearch} >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
