import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChannel } from "../actions/channelAction";
import styled from "styled-components";

const Channel = ({ channel }) => {
  const dispatch = useDispatch();
  const currentChannel = useSelector((state) => state.channel);

  return (
    <StyledChannel
      onClick={() => {
        dispatch(selectChannel(channel.name));
      }}
      className={`${currentChannel === channel.name ? "selected" : ""}`}
    >
      <h3>
        <div className="icon">{channel.icon}</div>
        <div>{channel.name}</div>
      </h3>
    </StyledChannel>
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
    display: flex;
    justify-content: space-between;
    .icon {
      width: 2.5rem;
    }
  }
  &:hover {
    background: rgb(235, 235, 235);
  }
`;

export default Channel;
