import React, { useEffect } from 'react';
import { Overlay } from './LoginPage.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {
  Overlay14,
  Overlay16,
  Overlay17,
  Overlay18,
  Overlay19,
  Overlay20,
} from 'components/Main/Main.styled';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/Auth/operations';

const LoginPage = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logoutThunk());
  }, [dispatch]);

  return (
    <>
      {isMobile && (
        <>
          <LoginForm />
          <Overlay16 />
          <Overlay18 />
          <Overlay14 />
          <Overlay19 />
          <Overlay17 />
          <Overlay20 />
        </>
      )}

      {(isTablet || isDesktop) && (
        <Overlay>
          <LoginForm />
          <Overlay16 />
          <Overlay18 />
          <Overlay14 />
          <Overlay19 />
          <Overlay17 />
          <Overlay20 />
        </Overlay>
      )}
    </>
  );
};

export default LoginPage;
