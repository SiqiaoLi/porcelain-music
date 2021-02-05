import styled from "styled-components";
import { motion } from "framer-motion";

const SongInfo = ({ name, artistsname, img }) => {
  return (
    <Info>
      <img src={img} alt="img" />
      <h2>{name}</h2>
      <h3>{artistsname}</h3>
    </Info>
  );
};

const Info = styled(motion.div)`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50vh;
    object-fit: cover;
  }
  h2 {
    padding: 1rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

export default SongInfo;
