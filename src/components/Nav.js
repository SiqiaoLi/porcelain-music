import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <nav>
      <h1>Porcelain</h1>
      <button>
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  );
};

export default Nav;
