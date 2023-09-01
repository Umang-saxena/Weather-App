import React, { useState,useRef } from 'react';
import './SearchBar.css'; // Import your CSS for styling

const SearchBar = (props) => {
  // props Destructuring
  const {setsearch} = props;

  // States Used
  const [input, setInput] = useState("");

  // Use Ref hook
  const inputRef=useRef(null); 
  // We use useRef hook here to select the text on click as ref hook is used to acces dom element in reactjs

  // Handling Search Button
  const handleSearch=()=>{
    setsearch(input);
  }
  const handleClick=()=>{
    if (inputRef){
      inputRef.current.select();
    }
  }

  


  return (
    <div className="search-bar-container search">
      <input
        type="text"
        ref={inputRef}
        className="search-input"
        placeholder="Search..."
        value={ input }
        onChange={(e)=>{setInput(e.target.value)}}
        onClick={handleClick}
      />
      <button className="search-button" onClick={handleSearch} >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
