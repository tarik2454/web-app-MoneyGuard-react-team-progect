import Datetime from 'react-datetime';
import { styled } from 'styled-components';

export const FormikForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  row-gap: 40px;
  padding: 32px 20px;
  background: radial-gradient(rgb(63, 46, 150), rgb(95, 71, 140));
  width: 320px;
  height: 600px;
  margin-top: 60px;

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    width: 540px;
    height: 580px;
    padding: 40px 73px;
    justify-content: center;
  }
`;

export const StyledButtonPerple = styled.button`
  width: 300px;
  height: 50px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 9px 15px 0px;
  color: rgb(251, 251, 251);
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  border: none;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    167deg,
    #ffc727 0%,
    #9e40ba 61.46%,
    #7000ff 90.54%
  );
`;

export const StyledButtonWhite = styled.button`
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  color: rgb(98, 63, 139);
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  color: #fbfbfb;
  background-color: transparent;
  max-width: 100%;
  padding-bottom: 8px;
  width: 280px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    width: 181px;
    text-align: center;
    padding-left: 0px;
  }
`;

export const InputText = styled.input`
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  color: #fbfbfb;
  background-color: transparent;
  max-width: 100%;
  padding-bottom: 8px;
  width: 280px;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    width: 420px;
    text-align: center;
    padding-left: 0px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTransaction = styled.h2`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  color: #fbfbfb;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-family: Poppins-Regular;
  line-height: 1.5;
  color: #fbfbfb;
`;

export const StyledIncomeExpences = styled.div`
  color: #ffb627;
  text-align: right;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledDatetime = styled(Datetime)`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
`;

export const StyledCloseIconEdit = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    cursor: pointer;
    width: 16px;
    height: 16px;
    stroke: ${({ theme }) => theme.colors.colorText};
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

export const StyledCategory = styled.div`
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  max-width: 100%;
  margin-bottom: 10px;
  width: 394px;
  font-family: Poppins-Regular;
  font-size: 18px;
  line-height: 1.5;
  padding-left: 20px;
`;

export const StyledP = styled.p`
  margin: 10px;
`;

export const StyledErrorMessage = styled.div`
  width: 100%;
  text-align: center;
  font-family: Poppins-Regular;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.yellow};
  position: absolute;
  bottom: 50%;
  right: 30%;
  transform: translate(50%, 50%);

  @media screen and (min-width: 768px) {
    top: 50%;
    right: 50%;
    transform: translate(50%, 0%);
  }
`;
