import styled from 'styled-components';

export const ContainerInfor = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  p {
    margin: 8px 16px;
  }

  h4 {
    font-weight: 400;
  }
`;

export const Title = styled.div`
  &::before {
    content: '';
    width: 8px;
    display: inline-block;
    margin: 0 6px 0 0;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #FF3726;
  }
`;


export const Text = styled.div`
  margin: 8px 0 0 18px;
  &::before {
    content: '';
    width: 10px;
    height: 2px;
    display: inline-block;
    margin: 0 6px 5px 0;
    background: #1188EE;
  }
`;