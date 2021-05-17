import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  h5 {
    margin-top: 260px;
    font-size: 40px;
    font-weight: 500;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 18px;
    font-weight: 300px;

    a {
      margin-top: 5px;
      color: var(--black);
    }
  }
`;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <h5>
          A Copenhagen based design & animation practice, focusing on creating
          clear, meaningful and eye catching solutions. Clients and
          collaborators include the likes of Netflix, Verizon, Arc’teryx & Ikea.
        </h5>
      </Wrapper>
      <InfoWrapper>
        <div>
          <p>Project Inquiries</p>
          <a href="mailto:newproject@designlab.com?subject=Hi">
            project@designlab.co
          </a>
        </div>
        <div>
          <p>General Inquiries</p>
          <a href="mailto:newproject@designlab.com?subject=Hi">
            hello@designlab.co
          </a>
        </div>
      </InfoWrapper>
    </Container>
  );
};

export default Home;

// A Copenhagen based design & animation practice, focusing on creating clear, meaningful and eye catching solutions.

// Clients and collaborators include the likes of Netflix, Verizon, Arc’teryx & Ikea.
// Project Inquiries
// newbiz@relaystudio.co
// General Inquiries
// hello@relaystudio.co
