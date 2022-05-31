import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px 0 20px 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: #EFF4F9;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  padding: 15px;
  h4 {
    margin-bottom: 30px;
    font-weight: normal;
    font-size: 18px;
    color: #445566;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
  border-radius: 5px;
  background: #fff;
  .color {
    background: #BBCCDD;
  }
  .separator {
    width: 2px;
    height: 50px;
    background: #EFF4F9;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  padding: 6px;
  height: 50px;

  label {
    margin: 4px;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #445566;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 22px;
`;