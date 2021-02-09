import styled from "styled-components";
import Channel from "./Channel";
import { useSelector } from "react-redux";

const SideNav = () => {
  const channels = ["热歌榜", "新歌榜", "飙升榜", "抖音榜", "电音榜"];
  const sideNavStatus = useSelector((state) => state.navStatus);

  return (
    <StyledSide className={`sideNav ${sideNavStatus ? "active-SideNav" : ""}`}>
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
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  color: rgb(51, 51, 51);

  h2 {
    padding: 2rem;
    font-weight: 500;
  }
`;

export default SideNav;
