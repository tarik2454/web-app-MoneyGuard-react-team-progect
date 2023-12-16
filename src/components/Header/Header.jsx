import { SpriteSVG } from 'pictures/SpriteSVG';
import React from 'react';
import {
  StyledHeader,
  StyledHeaderBtn,
  StyledExitSvg,
  StyledHeaderText,
  StyledLogoThumb,
  StyledUserThumb,
  StyledLogoSvg,
  StyledUserWrapper,
  StyledLogoLink,
  HeaderInner,
} from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/Auth/selectors';
import { setIsModalLogoutOpen } from 'redux/Global/globalSlice';
import { LogoutForm } from 'components/LoguotForm/LogoutForm';
import Modal from 'components/Modal/Modal';
import { isModalLogoutOpen } from 'redux/Global/selectors';
import { editString } from 'helpers/helpers';

const Header = () => {
  const dispatch = useDispatch();

  const { username } = useSelector(getUser);
  const isLogoutOpen = useSelector(isModalLogoutOpen);

  const handleLogout = () => {
    dispatch(setIsModalLogoutOpen(true));
  };
  return (
    <>
      <StyledHeader>
        <HeaderInner>
          <StyledLogoThumb>
            <StyledLogoLink to="/">
              <StyledLogoSvg>
                <SpriteSVG name={'logo'} />
              </StyledLogoSvg>
              Money Guard
            </StyledLogoLink>
          </StyledLogoThumb>

          <StyledUserThumb>
            <StyledHeaderText>{editString(username)}</StyledHeaderText>
            <StyledUserWrapper onClick={handleLogout}>
              <StyledExitSvg>
                <SpriteSVG name={'exit'} />
              </StyledExitSvg>
              <StyledHeaderBtn>Exit</StyledHeaderBtn>
            </StyledUserWrapper>
          </StyledUserThumb>
        </HeaderInner>
      </StyledHeader>
      {isLogoutOpen && (
        <Modal>
          <LogoutForm />
        </Modal>
      )}
    </>
  );
};

export default Header;
