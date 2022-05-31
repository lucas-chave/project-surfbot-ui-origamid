import styled from 'styled-components';

export const ContainerNav = styled.nav`
display: flex;
align-self: center;
margin-right: 5%;
@media(max-width: 700px) {
  display: none;
}
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const ListItem = styled.li`
list-style: none;
margin: 0 20px;
color: #fff;
`;

export const IconElement = styled.div`
width: 8px;
height: 8px;
border: 2px solid #fff;
border-radius: 50%;
box-sizing: border-box;
`;
