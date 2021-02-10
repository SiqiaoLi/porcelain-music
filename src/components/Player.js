import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "../actions/playerAction";
import { loadMusic } from "../actions/musicAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef }) => {
  // get states
  const isPlaying = useSelector((state) => state.isPlaying);
  const channel = useSelector((state) => state.channel);
  const { currentTime, duration, animationPercentage } = useSelector(
    (state) => state.timeInfo
  );

  const dispatch = useDispatch();

  const playSongHandler = () => {
    if (isPlaying) {
      dispatch(playSong());
      audioRef.current.pause();
    } else {
      dispatch(playSong());
      audioRef.current.play();
    }
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
  };

  const skipSongHandler = async () => {
    await dispatch(loadMusic(channel));
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const trackAnim = {
    transform: `translateX(${animationPercentage}%)`,
  };

  return (
    <StylePlayer>
      <TimeControl className="time-control">
        <p>{getTime(currentTime)}</p>
        <Track>
          <input
            type="range"
            value={currentTime}
            max={duration || 0}
            min={0}
            onChange={dragHandler}
          />
          <AnimateTrack style={trackAnim}></AnimateTrack>
        </Track>
        <p>{duration ? getTime(duration) : "0:00"}</p>
      </TimeControl>
      <PlayControl className="play-control">
        <FontAwesomeIcon
          size="lg"
          icon={faStepBackward}
          onClick={skipSongHandler}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="3x"
          icon={isPlaying ? faPauseCircle : faPlayCircle}
        />
        <FontAwesomeIcon
          size="lg"
          icon={faStepForward}
          onClick={skipSongHandler}
        />
      </PlayControl>
    </StylePlayer>
  );
};

const StylePlayer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(51, 51, 51);
`;

const TimeControl = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  input {
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
  }
  p {
    padding: 1rem;
  }
`;

const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 40%;
  svg {
    cursor: pointer;
  }
`;

const Track = styled.div`
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(to right, #8c8ceb, #ac4a81);
`;

const AnimateTrack = styled.div`
  background: rgb(204, 204, 204);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  padding: 1rem;
  pointer-events: none;
`;

export default Player;
