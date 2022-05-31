import styled from  'styled-components';

export const ContainerSection = styled.div`
display: flex;
@media screen and (max-width: 1250px) {
  display: flex;
  flex-direction: column-reverse;
}
`;

export const ContainerLeft = styled.div`
margin: 64px 5%;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width: 1250px) {
  margin-top:  0;
}

@media screen and (max-width: 590px) {
  margin-top:  0px;
}
@media screen and (max-width: 590px) {
  margin-top:  0px;
}
`;

export const ContainerRigth = styled.div`
margin: 64px 5%;
display: flex;
flex-direction: column;


p {
  margin: 24px 0;
}

`;

export const ImageSurf = styled.div`
position: relative;

@media screen and (max-width: 600px) {
  display: none;
}
@media screen and (max-width: 590px) {
  display: none;
}
`;

export const ImageMap = styled.div`
top: -70px;
display: flex;
position: relative;
box-shadow: 2px 3px 4px 3px rgba(23, 34, 45, 0.4);

@media screen and (max-width: 600px) {
  display: none;
}
@media screen and (max-width: 590px) {
  display: none;
}
`;

export const TextInformation = styled.div`
@media screen and (max-width: 1250px) {
  display: flex;
}

@media screen and (max-width: 590px) {
  display: none;
}

@media screen and (max-width: 590px) {
  display: none;
}
`;