import { FormCheck, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNavbar = styled(Navbar)`
  /* background-color: var(--black); */
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: #3497ff;
  font-size: 32px;
  font-weight: 500;
  margin-right: 60px;
  &:hover {
    cursor: pointer;
    color: #3497ff;
  }
`;

export const StyledNavbarLogo = styled.img`
  display: inline-block;
  vertical-align: top;
  font-size: 32px;
  margin-right: 10px;
`;

export const StyledBrandName = styled.span`
  color: #ffe300;
  &.brandMainText {
    margin-left: 8px;
  }
`;

export const StyledBrandName2 = styled.span`
  color: #3497ff;
`;

export const StyledNavList = styled(Nav)`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (min-width: 992px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: var(--blue);
  }
`;

export const StyledThemeSwitcher = styled(FormCheck)`
  .form-check-input {
    &:checked {
      background-color: var(--blue);
      border-color: var(--blue);
    }
    &:focus {
      border-color: var(--blue);
      box-shadow: 0 0 0 0.25rem rgba(52, 112, 255, 0.25);
      background-image: var(--bs-form-switch-bg);
    }
  }
`;

export const StyledSwitcherWrap = styled(Nav)`
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

export const StyledNavBurger = styled(Navbar.Toggle)`
  border-color: var(--blue);
  color: var(--blue);

  &.svg {
    stroke: var(--blue);
    color: var(--blue);
    fill: var(--blue);
  }
`;


