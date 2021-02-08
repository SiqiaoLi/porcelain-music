import styled from "styled-components";

const SongInfo = ({ name, artistsname, img }) => {
  return (
    <Info>
      <img src={img} alt="img" />
      <h2>{name}</h2>
      <h3>{artistsname}</h3>
    </Info>
  );
};

const Info = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50vh;
    object-fit: cover;
    border-radius: 0.7rem;
  }
  h2 {
    padding: 1rem 1rem 1rem 1rem;
  }
  h3 {
    font-size: 1rem;
  }
`;

export default SongInfo;
