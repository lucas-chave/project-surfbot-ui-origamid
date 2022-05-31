import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    font-size: 72px;
    line-height: 74px;
    font-family: Alice, serif;

    span {
      color: #1188EE;  
    }  
  }

  @media screen and (max-width: 1250px) {
    h1 {
      font-size: 54px;
      line-height: 60px;
      font-family: Alice;
    }
  }
  @media screen and (max-width: 590px) {
    h1 {
      font-size: 40px;
      line-height: 46px;
      font-family: Alice, serif;
    }
  }
  @media screen and (max-width: 590px) {
    h1 {
      font-size: 40px;
      line-height: 46px;
      font-family: Alice;
    }
  }
`;