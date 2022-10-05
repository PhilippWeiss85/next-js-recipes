import styled from "styled-components";

export default function Footer() {
  return (
    <StyledNav>
      <StyledLi>Footer Item 1</StyledLi>
      <StyledLi>Footer Item 2</StyledLi>
      <StyledLi>Footer Item 3</StyledLi>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
`;

const StyledLi = styled.a`
  margin: 10px;
  color: red;
`;
