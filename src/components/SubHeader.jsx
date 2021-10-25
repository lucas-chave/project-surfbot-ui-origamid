import React from 'react';
import styled from 'styled-components';

function SubHeader() {
  return (
    <Container>
      <Div>Matricule-se</Div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 120px;
  background: #EFF4F9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  font-family: Alice, serif;
  font-size: 72px;
  line-height: 82px;
  color: #445566;
`;

export default SubHeader;
