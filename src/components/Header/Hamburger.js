import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { cities } from '../../data/cities';

//Mobile only
// const HamburgerMenuIcon = styled.div`
//   display: none;
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   background-color: var(--black);
//   height: 1px;
//   width: 25px;

//   &::after {
//     content: '';
//     position: absolute;
//     background-color: var(--black);
//     height: 1px;
//     width: 15px;
//     top: -4px;
//   }

//   @media (max-width: ${({ theme }) => theme.device.m}) {
//     display: block;
//   } ;
// `;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 9;
  opacity: ${({ open }) => (open ? '1' : 0)};
`;

const SecondaryColor = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const MenuLayer = styled.div`
  position: relative;
  background-color: red;
  height: 100%;
  overflow: hidden;
`;

const CitiesBackground = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MenuItems = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 200px;
  overflow: hidden;
`;

const Nav = styled.div`
  display: block;

  li {
    list-style: none;
    font-size: 110px;
    cursor: pointer;
    font-weight: 800;
    height: 135px;

    position: relative;
    width: 700px;

    a {
      position: absolute;
      text-decoration: none;
      color: white;
      &:hover {
        color: var(--black);
      }
    }
  }
`;

const InfoText = styled.div`
  color: white;
  max-width: 350px;

  h3 {
    font-size: 20px;
    margin: 8px auto;
  }

  p {
    font-weight: 200;
    margin: 0 auto;
    font-size: 14px;
  }
`;

const Locations = styled.div`
  position: absolute;
`;

const Hamburger = ({ state }) => {
  useEffect(() => {
    if (state.clicked === true) {
      console.log('open');
    } else if (state.clicked === false) {
      console.log('closed');
    }
  }, [state]);

  return (
    <>
      <Wrapper open={state.clicked}>
        <SecondaryColor />
        <MenuLayer>
          <CitiesBackground />
          <Container>
            <MenuItems>
              <Nav>
                <ul>
                  <li>
                    <Link to="/opportunities">Opportunities</Link>
                  </li>
                  <li>
                    <Link>Solutions</Link>
                  </li>
                  <li>
                    <Link>Our promise</Link>
                  </li>
                </ul>
              </Nav>
              <InfoText>
                <h3>Our promise</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsu
                </p>
              </InfoText>
            </MenuItems>
            <Locations>
              {cities.map((city) => (
                <span> lol</span>
              ))}
            </Locations>
          </Container>
        </MenuLayer>
      </Wrapper>
    </>
  );
};

export default Hamburger;
