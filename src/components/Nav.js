import React from "react";
import styled from "styled-components";
import { toggleNav } from "../actions/navAction";
import { useDispatch } from "react-redux";

const Nav = () => {
  const dispatch = useDispatch();

  const openSideNavHandler = () => {
    dispatch(toggleNav());
  };

  return (
    <StyledNav>
      <h1>Porcelain</h1>
      <button onClick={openSideNavHandler}>Channel</button>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    font-size: 1rem;
    background: transparent;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border: 2px solid rgb(65, 65, 65);
    transition: all 0.3s ease;
    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  }
`;

export default Nav;
