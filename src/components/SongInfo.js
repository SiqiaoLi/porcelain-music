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
  color: rgb(51, 51, 51);
  padding-top: 1rem;
  img {
    width: 40vh;
    object-fit: cover;
    border-radius: 0.7rem;
  }
  h2 {
    padding: 1rem 1rem 0.5rem 1rem;
    font-weight: 500;
  }
  h3 {
    font-size: 1rem;
    font-weight: 400;
  }
  @media screen and (max-width: 510px) {
    min-height: 50vh;
  }
`;

export default SongInfo;
