//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <header>
      <h1><HighlightIcon/>Note Nest</h1>
    </header>
  );
}

export default Header;

