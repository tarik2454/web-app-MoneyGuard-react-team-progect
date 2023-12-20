import { styled, keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(10%);
  }
  50% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(10%);
  }
`;

export const StyledAdd = styled.button`
  height: 44px;
  width: 44px;
  border: none;
  border-radius: 50%;
  padding: 12px;
  outline: none;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.spacing(5)};
  color: ${({ theme }) => theme.colors.colorText};
  background: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${bounceAnimation} 2s infinite ease-in-out;

  position: fixed;
  right: 47px;
  bottom: 47px;

  @media screen and (min-width: 1280px) {
    right: 40px;
    bottom: 40px;
  }
`;

export const StyledPlusAddSvg = styled.div`
  width: 20px;
  height: 20px;

  stroke: #ffffff;
`;
