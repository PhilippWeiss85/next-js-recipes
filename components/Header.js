import styled from "styled-components";

export default function Header() {
  return (
    <StyledNav>
      <StyledLi>Home</StyledLi>
      <StyledLi>Veggie</StyledLi>
      <StyledLi>Dessert</StyledLi>
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
