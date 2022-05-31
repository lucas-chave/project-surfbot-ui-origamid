import styled from 'styled-components';

export const ContainerSectionContact = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
 
  .trace {
    width: 2px;
    display: flex;
    align-self: center;
    height: 477px;
    background: #EFF4F9; 

    @media screen and (max-width: 1080px) {
      display: none;
    }
  }

  @media screen and (max-width: 380px) {
    margin: 0;
    padding: 0;
  }
`;

export const TitleSectionContact = styled.h2`
  font-family: Alice;
  font-weight: normal;
  font-size: 72px;
  line-height: 82px;
  color: #445566;
  
  @media screen and (max-width: 380px) {
    font-size: 32px;
  }
`;

export const SubContainerContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1080px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media screen and (max-width: 380px) {
    margin: 0;
  }

`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 510px) {
    width: 95%;
  }
`;

export const ContainerInputContact = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  width: 100%;

  label {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #445566;
  }

  input {
    width: 34em;
    height: 50px;
    border: none;
    background: #EFF4F9;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    border-radius: 5px;

    @media screen and (max-width: 510px) {
      width: 100%;
      
    }
  }

  textarea {
    max-width: 34em;
    height: 180px;
    border: none;
    background: #EFF4F9;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    border-radius: 5px;
  }
`;

export const ContainerInformation = styled.div`
  display: flex;
`;

export const ImageIConsInformation = styled.img`
  margin-top: -210px;

  @media screen and (max-width: 1080px) {
    margin-top: 0;
  }

  @media  screen and (max-width: 597px) {
    display: none;
  }
`;

export const TitleInformationAddress = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #445566;
`;

export const InformationAddress = styled.p`
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #445566;
  margin-bottom: 5px;
`;

export const MapIndication = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  color: #445566;
  display: flex;
  align-items: center;

  img {
    margin-left: 7px;
  }
`;

export const ContainerDetailInformations = styled.div`
  margin-top: 20px;

  &::after {
    content: '';
    width: 270px;
    height: 2px;
    display: inline-block;
    background: #EFF4F9;
  }
`;

export const ContainerDetailInformationsHour = styled.div`
  margin-top: 20px;
`

export const TitleInformationHour = styled.p`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #445566;

  &::before {
    content: '';
    width: 8px;
    display: inline-block;
    margin: 0 6px 0 0;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #16C70B;
  }
`;

export const ButtonSendMessage = styled.button`
  border: none;
  background: #445566;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  width: 230px;
  height: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;
`;

export const SubContainerInformation = styled.div`

`;
