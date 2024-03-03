import React from "react";
import './Header.css';
import AutocompleteIntroduction from "../autocomplete/Autocomplete";

const Header = () =>{
    const handleClick = (e) => {
        console.log(`Menu item ${e.target.innerText} was clicked.`);};
    return(
       <div className="header">
        <div className="menu-items">
  <div className="li_1 button" onClick={handleClick}>InWork...</div>
  <div className="li_2 button" onClick={handleClick}>InWork...</div>
  <div className="li_3 button" onClick={handleClick}>InWork...</div>
  <div className="li_4 button" onClick={handleClick}>InWork...</div>
</div>
        <div className="intro">
        <AutocompleteIntroduction></AutocompleteIntroduction>
        </div>
       </div>
  );

}

export default Header;