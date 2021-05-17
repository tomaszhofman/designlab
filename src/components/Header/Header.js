import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamburger from './Hamburger';

const Container = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 0;
  height: 100px;
`;

const Wrapper = styled.div`
  position: relative;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.div`
  a {
    font-weight: 700;
    color: var(--black);
    text-decoration: none;
    font-size: 20px;
  }
`;

const MenuButton = styled.button`
  color: var(--black);
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Header = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });

  const handleMenu = () => {
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
      console.log(state);
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: 'Menu',
      });
      console.log(state);
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: 'Close',
      });
      console.log(state);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo>
          <Link to="/">designlab.</Link>
        </Logo>
        <MenuButton onClick={handleMenu}>menu</MenuButton>
      </Wrapper>
      <Hamburger state={state} />
    </Container>
  );
};

export default Header;
