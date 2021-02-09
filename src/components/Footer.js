import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2021 Porcelain</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  min-height: 7vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #767682;
  font-size: 0.75rem;
`;

export default Footer;
