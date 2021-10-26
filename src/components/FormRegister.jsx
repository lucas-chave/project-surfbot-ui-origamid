import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import block from '../images/cadeado.svg';
import MethodCourse from './MethodCourse';

function FormRegister(props) {
  const [changeColor, setChangeColor] = useState();

  useEffect(() => {
    function changeClass() {
      const inputBank = document.querySelector('#container-bank')
      const inputCredit = document.querySelector('#container-credit')
  
      if (changeColor === 'credit') {
        inputCredit.classList.add('backgroundColor');
        inputBank.classList.remove('backgroundColor');
      }
      if (changeColor === 'bank') {
        inputCredit.classList.remove('backgroundColor');
        inputBank.classList.add('backgroundColor');
      }
    }
    changeClass(); 
  }, [changeColor]);

  return (
    <Container>
      <ContainerForm>
        <form>
          <ContainerInputLagger>
            <label>Nome</label>
            <InputLagger type="text" />
          </ContainerInputLagger>
          <ContainerInputLagger>
            <label>Email</label>
            <InputLagger  type="text" />
          </ContainerInputLagger>
          <ContainerInputLagger>
            <label>CPF</label>
            <InputLagger placeholder="111.111.111-01" type="number" />
          </ContainerInputLagger>
          <ContainerDataUser>
            <Informations1>
              <LabelData>Endereço</LabelData>
              <InputDataCard type="text"/>
              <LabelData>CEP</LabelData>
              <InputDataCard type="number"/>
            </Informations1>
            <Informations1> 
            <LabelData>Estado</LabelData>
              <InformationsSelect>
                <option selected value="2021">Mês</option>
                <option value="2022">2022</option>
              </InformationsSelect>
              <LabelData>Cidadde</LabelData>
              <InformationsSelect placeholder="ano">
                <option value="2021">Ano</option>
                <option value="2022">2022</option>
              </InformationsSelect>
            </Informations1>
          </ContainerDataUser>
          <MethodPayment>
            <h4>Formas de pagamento</h4>
            <ContainerRadios>
              <ContainerInputRadio onChange={({ target }) => setChangeColor(target.id)} id="container-credit">
                <InputRadio name="method" id="credit" type="radio" />
                <label htmlFor="credit">Cartão de Crédito</label>
              </ContainerInputRadio>
              <ContainerInputRadio onChange={({ target }) => setChangeColor(target.id)} id="container-bank">
                <InputRadio name="method" id="bank" type="radio" />
                <label htmlFor="bank">Boleto Bancário</label>
              </ContainerInputRadio>
            </ContainerRadios>
            <ContainerDataCard>
              <DataCard1>
                <LabelData>Nome do Cartão</LabelData>
                <InputDataCard type="text"/>
                <LabelData>Numero do Cartão</LabelData>
                <InputDataCard type="text"/>
              </DataCard1>
              <DataCard2>
                <div>
                  <LabelData>Data de expiração</LabelData>
                  <div className="container-selects">
                    <select>
                      <option value="2021">Mês</option>
                      <option value="2022">2022</option>
                    </select>
                    <select>
                      <option value="2021">Ano</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                </div>
                <div className="container-code-security">
                  <LabelData>Código de segurança</LabelData>
                  <InputDataCard type="text"/>
                </div>
              </DataCard2>
            </ContainerDataCard>
          </MethodPayment>
          <ContainerButton>
            <p>Seu Cartão será debitado em R$ {`${props.numberValue}`},00</p>
            <ButtonRegister>REALIZAR MATRÍCULA</ButtonRegister>
          </ContainerButton>
          <Inform>Informações seguras e criptografadas</Inform>
        </form>
      </ContainerForm>
      <MethodCourse />
    </Container>
  );
}

FormRegister.propTypes = {
  numberValue: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  return {
    numberValue: state.reducerValue.state,
  };
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-wrap: wrap-reverse;
  margin-top: 32px;
  margin-bottom: 30px;
`;

const ContainerInputLagger = styled.div`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
`;

const ContainerForm = styled.div`
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

const Inform = styled.p`
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

const InputLagger = styled.input`
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

const MethodPayment = styled.div`
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

const InputRadio = styled.input`
  width: 18px;
  height: 18px;
  margin: 5px 5px 5px 3px;
`;

const ContainerInputRadio = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
`;

const ContainerRadios = styled.div`
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

const ContainerDataCard = styled.div`
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

const DataCard1 = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */

`;

const DataCard2 = styled.div`
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

const LabelData = styled.label`
  font-size: 18px;
  line-height: 25px;
  color: #445566;
  margin: 15px 0 8px 0;
`;

const InputDataCard = styled.input`
  width: 270px;
  height: 50px;
  background: #EFF4F9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  border: none;
  padding: 10px;
`;

const ButtonRegister = styled.button`
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

const ContainerButton = styled.div`
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

const ContainerDataUser = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Informations1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  justify-content: center;
  margin: 0 10px;
`;

const InformationsSelect = styled.select`
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

export default connect(mapStateToProps, null)(FormRegister);
