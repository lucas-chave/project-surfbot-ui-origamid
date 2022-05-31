import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MethodCourse from '../MethodCourse';

import {
  ButtonRegister,
  Container,
  ContainerButton,
  ContainerDataCard,
  ContainerDataUser,
  ContainerForm,
  ContainerInputLagger,
  ContainerInputRadio,
  ContainerRadios,
  DataCard1,
  DataCard2,
  Inform,
  Informations1,
  InformationsSelect,
  InputDataCard,
  InputLagger,
  InputRadio,
  LabelData,
  MethodPayment
} from './styles';

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
    numberValue: state.pricePlan.pricePlan,
  };
}

export default connect(mapStateToProps, null)(FormRegister);
