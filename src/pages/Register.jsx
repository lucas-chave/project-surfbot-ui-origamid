import React, { Suspense } from 'react';
import Loading from '../components/Loading';

const FormRegister = React.lazy(() => import('../components/FormRegister'));
const Header = React.lazy(() => import('../components/Header'));
const SubHeader = React.lazy(() => import('../components/SubHeader'));

function Register() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <SubHeader />
      <FormRegister />
    </Suspense>
  ); 
}

export default Register;
