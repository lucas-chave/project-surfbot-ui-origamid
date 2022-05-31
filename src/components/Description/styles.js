import styled from 'styled-components';

export const Div = styled.div`
background-color: #1188EE;
width: 100%;
height: 30px;
`;

export const Par = styled.p`
padding: 8px 0 0 0;
margin-left: 5%;
display: flex;
justify-content: flex-start;
font-family: Arial, Helvetica, sans-serif;
font-weight: 700;
font-size: 14px;
line-height: 19px;
color: #fff;

@media screen and (max-width: 440px) {
  font-size: 12px;
  line-height: 14px;
}
`;
