import React from 'react';
import styled from 'styled-components';

function MethodCourse() {
  return (
    <Container>
      <h4>Escolha o Plano</h4>
      <div>
        <div>
          <label htmlFor="child">Infantil</label>
          <input id="child" name="flat" type="radio"/>
        </div>
        <div>
          <label htmlFor="adult">Adulto</label>
          <input id="adult" name="flat" type="radio"/>
        </div>
        <div>
          <label htmlFor="professional">Profissional</label>
          <input id="professional" name="flat" type="radio"/>
        </div>
      </div>
      <div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  h4 {
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    color: #445566;
  }
`;

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MethodCourse;
