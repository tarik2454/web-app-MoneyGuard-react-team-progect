import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 12px 0;
  background: linear-gradient(276deg, #2e1746 3.19%, #2e225f 100%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;

  @media screen and (min-width: 768px) {
    padding: 16px 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;

export const StyledLogoThumb = styled.div``;

export const StyledLogoSvg = styled.div`
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledLogoText = styled.p`
  font-family: Poppins-Regular;
  font-size: 12.84px;
  line-height: 1.58;
  color: ${({ theme }) => theme.colors.colorText};

  @media screen and (min-width: 768px) {
    font-size: 17.1px;
    line-height: 1.53;
  }
`;

export const StyledUserThumb = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.4)};

  @media screen and (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const StyledHeaderText = styled.p`
  font-family: Poppins-Regular;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.navLink};
  position: relative;

  &::after {
    display: none;
    content: '';
    width: 1px;
    height: 110%;
    background-color: ${({ theme }) => theme.colors.navLink};

    position: absolute;
    top: -1px;
    right: -7px;

    @media screen and (min-width: 768px) {
      display: block;
      right: -12px;
    }
  }
`;

export const StyledUserWrapper = styled.button`
  display: flex;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing(1.6)};
  padding-right: ${({ theme }) => theme.spacing(0)};
  border: none;
  background-color: transparent;
  transition: all 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);

    div {
      color: green;
      fill: green;
    }
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    padding-left: ${({ theme }) => theme.spacing(3)};
  }
`;

export const StyledExitSvg = styled.div`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.navLink};
  cursor: pointer;
  transition: all 300ms ease-in-out;
`;

export const StyledHeaderBtn = styled.div`
  display: none;
  margin-right: 0;
  font-family: Poppins-Regular;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.navLink};
  cursor: pointer;
  transition: all 300ms ease-in-out;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const StyledLogoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-family: Poppins-Regular;
  font-size: 12.84px;
  line-height: 1.58;
  color: ${({ theme }) => theme.colors.colorText};

  @media screen and (min-width: 768px) {
    font-size: 17.1px;
    line-height: 1.53;
  }
`;
