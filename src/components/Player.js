import styled from "styled-components";
import { motion } from "framer-motion";

const Player = ({ name, artistsname, img }) => {
  return (
    <StylePlayer>
      <img src={img} alt="img" />
      <h2>{name}</h2>
      <p>{artistsname}</p>
    </StylePlayer>
  );
};

const StylePlayer = styled(motion.div)`
  img {
    width: 50vh;
    object-fit: cover;
  }
`;

export default Player;
