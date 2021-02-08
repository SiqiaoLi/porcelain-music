import styled from "styled-components";
import Channel from "./Channel";

const SideNav = () => {
  const channels = ["热歌榜", "新歌榜", "飙升榜", "抖音榜", "电音榜"];

  return (
    <StyledSide>
      <h2>Channel</h2>
      {channels.map((channel, index) => (
        <Channel channel={channel} key={index} />
      ))}
    </StyledSide>
  );
};

const StyledSide = styled.div`
  position: fixed;
  box-shadow: 2px 2px 50px rgb(221, 221, 221);
  top: 0;
  left: 0;
  width: 15rem;
  height: 100%;
  overflow: scroll;
  background: white;
  transform: translateX(0%);
  transition: all 0.5s ease;
  opacity: 1;
  h2 {
    padding: 2rem;
  }
`;

export default SideNav;
