import React from 'react';
import Description from '../components/Description';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SectionInfor from '../components/SectionInfor';
import SectionCads from '../components/SectionCards';
import SectionQuote from '../components/SectionQuote';
import SectionContact from '../components/SectionContact';
import SectionFooter from '../components/SectionFooter';

function Main() {
  return(
    <>
      <Description />
      <Header />
      <Banner />
      <SectionInfor />
      <SectionCads />
      <SectionQuote />
      <SectionContact />
      <SectionFooter />
    </>
  );
}

export default Main;
