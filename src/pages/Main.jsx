import React, { Suspense } from 'react';
import Loading from '../components/Loading';

const Description = React.lazy(() => import('../components/Description'));
const Header = React.lazy(() => import('../components/Header'));
const Banner = React.lazy(() => import('../components/Banner'));
const SectionInfor = React.lazy(() => import('../components/SectionInfo'));
const SectionCads = React.lazy(() => import('../components/SectionCards'));
const SectionQuote = React.lazy(() => import('../components/SectionQuote'));
const SectionContact = React.lazy(() => import('../components/SectionContact'));
const SectionFooter = React.lazy(() => import('../components/Footer'));


function Main() {
  return(
    <Suspense fallback={<Loading />}>
      <Description />
      <Header />
      <Banner />
      <SectionInfor />
      <SectionCads />
      <SectionQuote />
      <SectionContact />
      <SectionFooter />
    </Suspense>
  );
}

export default Main;
