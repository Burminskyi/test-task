import { Navbar, Container, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import {
  StyledBrandName,
  StyledNavBurger,
  StyledNavLink,
  StyledNavList,
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarLogo,
  StyledSwitcherWrap,
  StyledThemeSwitcher,
} from "./NavBar.styled";

import logo from "./header-logo.svg";
import { useDispatch } from "react-redux";
import { setThemeStyle } from "../../redux/Theme/slice";

const NavBar = () => {
  const dispatch = useDispatch();
  const setTheme = () => dispatch(setThemeStyle());

  return (
    <StyledNavbar collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/">
          <StyledNavbarBrand>
            <StyledNavbarLogo alt="" src={logo} />{" "}
            <StyledBrandName>Ukr</StyledBrandName>Sharing
          </StyledNavbarBrand>
        </NavLink>
        <StyledNavBurger aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <StyledNavList className="me-auto">
            <StyledNavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "600" : "",
                  color: isActive ? "var(--blue)" : "",
                };
              }}
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              to="/catalog"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "600" : "",
                  color: isActive ? "var(--blue)" : "",
                };
              }}
            >
              Catalog
            </StyledNavLink>
            <StyledNavLink
              to="/favorites"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "600" : "",
                  color: isActive ? "var(--blue)" : "",
                };
              }}
            >
              Favorites
            </StyledNavLink>
          </StyledNavList>
          <StyledSwitcherWrap>
            <Form>
              <StyledThemeSwitcher
                onClick={setTheme}
                type="switch"
                id="custom-switch"
                label="Change theme"
              />
            </Form>
          </StyledSwitcherWrap>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavBar;
