import React from 'react';
import styled from 'styled-components';

function FormRegister() {
  return (
    <Container>
      <ContainerForm>
        <form>
          <div>
            <label>Nome</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>CPF</label>
            <input type="number" />
          </div>
          <MethodPayment>
            lala
          </MethodPayment>
        </form>
      </ContainerForm>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 32px;
`;

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    margin: 8px 0;
  }
  label {
    font-size: 18px;
    line-height: 25px;
    color: #445566;
  }
  input {
    width: 570px;
    height: 50px;
    background: #EFF4F9;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    border-radius: 5px;
    border: none;
  }
`;

const MethodPayment = styled.div`
  display: flex;
`; 

export default FormRegister;
