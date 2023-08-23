import styled from "styled-components";
import logo from "../assets/logo.png";
import arrow from "../assets/arrowTWS.svg";
import hamburger from "../assets/HamburgerBtn.svg";
import { useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);
  const navHandle = () => setNav(!nav);
  return (
    <Navbar>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      {nav ? (
        <NavActive>
            <Ulnav>
            <Linav>
              <a href="#">Products</a>
            </Linav>
            <Linav>
              <a href="#">Solutions</a>
            </Linav>
            <Linav>
              <a href="#">Resources</a>
            </Linav>
            <Linav>
              <a href="#">Pricing</a>
            </Linav>
          </Ulnav>
          <Signnav>
            <button className="Login">Login</button>
            <button className="TWS">
              Try whitepace free{" "}
              <span>
                <img src={arrow} alt="TWS" />
              </span>
            </button>
          </Signnav>
        </NavActive>
      ) : (
        <Nav>
          <Ulnav>
            <Linav>
              <a href="">Products</a>
            </Linav>
            <Linav>
              <a href="">Solutions</a>
            </Linav>
            <Linav>
              <a href="">Resources</a>
            </Linav>
            <Linav>
              <a href="">Pricing</a>
            </Linav>
          </Ulnav>
          <Signnav>
            <button className="Login">Login</button>
            <button className="TWS">
              Try whitepace free{" "}
              <span>
                <img src={arrow} alt="TWS" />
              </span>
            </button>
          </Signnav>
        </Nav>
      )}
      <Hamburger onClick={navHandle}>
        <img src={hamburger} alt="hamburger" />
      </Hamburger>
    </Navbar>
  );
}

const Navbar = styled.nav`
  height: 80px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1152px) {
    display: flex;
  }
`;
const Nav = styled.div`
  display: flex;
  @media screen and (max-width: 1152px) {
    display: none;
  }
`;
const NavActive = styled.div`
@media screen and (min-width:1152px) {
    display: flex;
}
@media screen and (max-width:1152px) {
    display: block;
    text-align: center;
    position: absolute;
    background-color: #16355b;
    top: 5rem;
    right: 3.5rem;
    padding: 1rem;
    border-radius: 5px;
    ul{
        display: block;
    }
    li{
        margin-top: 0.5rem;
    }
    :last-child{
        display: block;
        .Login{
            margin-top: 1rem;
            padding: 1rem;
        }
        .TWS{
            margin-top: 1rem;
            padding: 1rem;
        }
    }
}
`
const Logo = styled.div`
img{
    /* width: 100%; */
}`;
const Ulnav = styled.ul`
  display: flex;
  align-items: center;

`;
const Linav = styled.li`
  list-style: none;
  margin: 0 1rem;
  a {
    text-decoration: none;
    color: #4f9cf9;
  }
`;
const Signnav = styled.div`
  display: flex;
  button {
    cursor: pointer;
    border-radius: 5px;
    border: none;
    margin: 0 1rem;
    &:hover {
      background-color: #16355b;
    }
  }
  .Login {
    background-color: #ffe492;
    padding: 1rem 2rem;
  }
  .TWS {
    display: flex;
    align-items: center;
    background-color: #4f9cf9;
    padding: 1rem 1rem;
    color: #fff;
    span {
      margin-left: 10px;
      align-items: center;
      display: flex;
    }
  }
`;
const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 1152px) {
    display: block;
  }
`;

export default NavBar;
