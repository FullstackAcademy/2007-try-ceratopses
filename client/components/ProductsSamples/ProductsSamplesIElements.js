import styled from 'styled-components';

export const ProductSamplesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: #010606;
  ${'' /* padding: 0 50px; */}

  ${'' /* @media screen and (max-width: 868px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } */}
`;

export const ProductSamplesWrapper = styled.div`
  ${'' /* max-width: 1000px; */}
  margin: 0 auto;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; */
  }
  ${'' /* grid-gap: 16px;
  padding: 0 50px; */}

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProductSamplesMedia = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ProductSamplesImage = styled.img`
  width: 25%;
  height: auto;
  margin: 0 0 5px 0;
  padding: 0;
`;
