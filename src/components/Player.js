import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { playSong } from "../actions/playerAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ audioRef }) => {
  const isPlaying = useSelector((state) => state.isPlaying);
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

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <StylePlayer>
      <TimeControl>
        <p>{getTime(currentTime)}</p>
        <Track>
          <input type="range" />
          <AnimateTrack></AnimateTrack>
        </Track>
        <p>{getTime(duration)}</p>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </PlayControl>
    </StylePlayer>
  );
};

const StylePlayer = styled(motion.div)`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TimeControl = styled(motion.div)`
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

const PlayControl = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 40%;
  svg {
    cursor: pointer;
  }
`;

const Track = styled(motion.div)`
  width: 100%;
  height: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(to right, #8c8ceb, #ac4a81);
`;

const AnimateTrack = styled(motion.div)`
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
