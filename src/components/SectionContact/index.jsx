import React from 'react';

import SetaContact from '../../images/seta-contact.svg';
import setaButton from '../../images/seta.svg';
import bgIcons from '../../images/bicones.svg';

import {
  ButtonSendMessage,
  ContainerDetailInformations,
  ContainerDetailInformationsHour,
  ContainerInformation,
  ContainerInputContact,
  ContainerSectionContact,
  FormContact,
  ImageIConsInformation,
  InformationAddress,
  MapIndication,
  SubContainerContact,
  SubContainerInformation,
  TitleInformationAddress,
  TitleInformationHour,
  TitleSectionContact
} from './styles.js';

function SectionContact() {
  return (
    <ContainerSectionContact>
      <TitleSectionContact>Contato</TitleSectionContact>
      <SubContainerContact>
        <FormContact>
          <ContainerInputContact>
            <label>Nome</label>
            <input type="text" />
          </ContainerInputContact>
          <ContainerInputContact>
            <label>Email</label>
            <input type="email" />
          </ContainerInputContact>
          <ContainerInputContact>
            <label>Mensagem</label>
            <textarea />
          </ContainerInputContact>
          <ButtonSendMessage>ENVIAR MENSAGEM <img src={setaButton} alt="icone de seta" /></ButtonSendMessage>
        </FormContact>
        <div className="trace" />
        <ContainerInformation>
          <SubContainerInformation>
            <ContainerDetailInformations>
              <TitleInformationAddress>Endereço</TitleInformationAddress>
              <InformationAddress>Prai mansa n: 47</InformationAddress>
              <InformationAddress>Procure a barraca vermelha</InformationAddress>
              <MapIndication>VER NO MAPA <img src={ SetaContact } alt="icone de seta"/></MapIndication>
            </ContainerDetailInformations>
            <ContainerDetailInformations>
              <TitleInformationAddress>Email & telefone</TitleInformationAddress>
              <InformationAddress>contato@surfbot.com</InformationAddress>
              <InformationAddress>88 99999-9999</InformationAddress>
            </ContainerDetailInformations>
            <ContainerDetailInformationsHour>
              <TitleInformationHour>Horário</TitleInformationHour>
              <InformationAddress>De Sexta à sábado</InformationAddress>
              <InformationAddress>das 06:00 às 14:00</InformationAddress>
            </ContainerDetailInformationsHour>
          </SubContainerInformation>
          <ImageIConsInformation src={ bgIcons } alt="icones"/>
        </ContainerInformation>
      </SubContainerContact>
    </ContainerSectionContact>
  );
}

export default SectionContact;
