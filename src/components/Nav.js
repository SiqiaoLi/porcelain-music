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
  color: rgb(51, 51, 51);
  padding-top: 0.5rem;
  padding-bottom: 1rem;

  button {
    font-size: 1rem;
    background: transparent;
    border-radius: 0.3rem;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border: 2px solid rgb(51, 51, 51);
    transition: all 0.3s ease;
    &:hover {
      background: rgb(51, 51, 51);
      color: white;
    }
    &:focus {
      outline: 0 !important;
    }
  }

  @media screen and (max-width: 768px) {
    button {
      z-index: 10;
    }
  }
`;

export default Nav;
