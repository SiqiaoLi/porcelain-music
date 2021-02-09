import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectChannel } from "../actions/channelAction";
import styled from "styled-components";

const Channel = ({ channel }) => {
  const dispatch = useDispatch();
  const currentChannel = useSelector((state) => state.channel);

  return (
    <Link to={`/${channel}`}>
      <StyledChannel
        onClick={() => {
          dispatch(selectChannel(channel));
        }}
        className={`${currentChannel === channel ? "selected" : ""}`}
      >
        <h3>{channel}</h3>
      </StyledChannel>
    </Link>
  );
};

const StyledChannel = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  transition: all 0.75s ease-out;
  h3 {
    font-weight: 400;
  }
  &:hover {
    background: rgb(235, 235, 235);
  }
`;

export default Channel;
