import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <NavLink to="/" className="logo">
          MixMaster
        </NavLink>

        <button
          className="toggle-menu"
          style={{ color: isOpen ? "var(--primary-500)" : "var(--grey-500)" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars />
        </button>

        <div className={`nav-links ${isOpen ? "show" : ""}`}>
          <NavLink to="/" className="nav-link">
            home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            about
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--white);

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1.5rem 0.25rem;
    display: flex;
    flex-direction: column;
  }
  .logo {
    font-size: clamp(1.5rem, 3vw, 3rem);
    color: var(--primary-500);
    letter-spacing: 2px;
    font-weight: 700;
  }

  .toggle-menu {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background: transparent;
    border-color: transparent;
    font-size: 1.2rem;
    color: var(--grey-600);
    transition: var(--transition);

    &:hover {
      color: var(--primary-500);
      cursor: pointer;
    }
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
    overflow: hidden;
    transition: var(--transition);
    height: 0;
    display: none;

    &.show {
      height: auto;
      display: flex;
    }

    .nav-link {
      color: var(--grey-900);
      text-transform: capitalize;
      font-weight: 500;
      letter-spacing: 2px;
      padding: 0.5rem 0.5rem 0.5rem 0;
      transition: var(--transition);

      &:hover {
        color: var(--primary-500);
      }

      &.active {
        color: var(--primary-500);
      }
    }
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
      height: auto;
      display: flex;
    }
    .toggle-menu {
      display: none;
    }
  }
`;

export default Navbar;
