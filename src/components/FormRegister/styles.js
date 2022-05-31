import styled from 'styled-components';

import block from '../../images/cadeado.svg';

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
flex-wrap: wrap-reverse;
margin-top: 32px;
margin-bottom: 30px;
`;

export const ContainerInputLagger = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`;

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label {
  font-size: 18px;
  line-height: 25px;
  color: #445566;
}
`;

export const Inform = styled.p`
display: flex;
align-self: flex-start;
font-size: 14px;
line-height: 19px;
color: #445566;

&::before {
  content: url(${block});
  margin-right: 5px;
}

@media screen and (max-width: 620px) {
  display: flex;
  align-self: center;
  justify-content: center;
}
`;

export const InputLagger = styled.input`
width: 570px;
height: 50px;
background: #EFF4F9;
box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
border-radius: 5px;
padding: 10px;
border: none;
@media screen and (max-width: 615px) {
  width: 270px;
}
`;

export const MethodPayment = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
margin-top: 30px;
h4 {
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #1188EE;
  &::after {
    content: '';
    width: 570px;
    height: 2px;
    margin: 15px 0 30px 0;
    display: block;
    background: #EFF4F9;
  }
}
&::after {
    content: '';
    width: 570px;
    height: 2px;
    margin: 30px 0 30px 0;
    display: block;
    background: #EFF4F9;
}
`;

export const InputRadio = styled.input`
width: 18px;
height: 18px;
margin: 5px 5px 5px 3px;
`;

export const ContainerInputRadio = styled.div`
display: flex;
width: 100%;
align-items: center;
height: 100%;
`;

export const ContainerRadios = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 396px;
height: 50px;
background: #EFF4F9;
box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);

.backgroundColor {
  background: #BBCCDD;
}
`;

export const ContainerDataCard = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
width: 100%;
margin: 20px 10px 0 10px;

@media screen and (max-width: 620px) {
  flex-direction: column;
}
`;

export const DataCard1 = styled.div`
display: flex;
flex-direction: column;
/* flex-wrap: wrap; */

`;

export const DataCard2 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
/* margin-top: 20px; */
margin: 20px 10px 0 10px;

.container-selects {
  display: flex;
  justify-content: space-between;
}

.container-code-security {
  display: flex;
  flex-direction: column;
}

select {
  width: 120px;
  height: 50px;
  background: #EFF4F9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  border: none;
  padding: 10px;
  margin:   8px 0 2px 0;
}
`;

export const LabelData = styled.label`
font-size: 18px;
line-height: 25px;
color: #445566;
margin: 15px 0 8px 0;
`;

export const InputDataCard = styled.input`
width: 270px;
height: 50px;
background: #EFF4F9;
box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
border-radius: 5px;
border: none;
padding: 10px;
`;

export const ButtonRegister = styled.button`
width: 257px;
height: 50px;
background: #1188EE;
border-radius: 5px;
border: none;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color: #FFFFFF;
margin-top: 15px;
`;

export const ContainerButton = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
margin-bottom: 20px;
p {
  font-size: 18px;
  line-height: 21px;
  color: #445566;
}

@media screen and (max-width: 620px) {
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}
`;

export const ContainerDataUser = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`;

export const Informations1 = styled.div`
display: flex;
flex-direction: column;
width: 270px;
justify-content: center;
margin: 0 10px;
`;

export const InformationsSelect = styled.select`
display: flex;
justify-content: space-between;
width: 270px;
height: 50px;
background: #EFF4F9;
box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
border-radius: 5px;
border: none;
padding: 10px;
`;