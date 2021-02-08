import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectChannel } from "../actions/channelAction";

const Channel = ({ channel }) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(selectChannel(channel));
      }}
    >
      <Link to={`/${channel}`}>
        <h3>{channel}</h3>
      </Link>
    </div>
  );
};

export default Channel;
