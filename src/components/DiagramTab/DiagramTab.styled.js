import Select from 'react-select';
import styled from 'styled-components';
export const StyledSelect = styled(Select)`
  width: 100%;
  height: 50px;
  background: rgba(74, 86, 226, 0.1);

  .react-select__single-value {
    color: #fbfbfb;
    font-size: 16px;
    font-weight: 400;
    padding: 12px 20px 14px 20px;
    line-height: 1.5;
    font-family: Poppins-Regular;
    margin: 0;
  }

  .react-select__control {
    border-radius: 8px;
    height: 50px;
    border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));
    background: rgba(74, 86, 226, 0.1);
    margin-bottom: 0;
    color: #fbfbfb;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    box-shadow: none;
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__control:focus {
    outline: none;
    border: 1px solid transparent;
  }

  .react-select__control:hover {
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: none;
  }

  .react-select__input-container {
    padding: 0;
    margin: 0;
  }

  .react-select__indicators {
    padding: 0px 20px;
    display: flex;
    align-items: center;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__option {
    color: #fbfbfb;
    font-family: Poppins-Regular;
    font-size: 16px;
    transition: all 0.3s, color 0.3s;
    margin-top: 0;
    cursor: pointer;

    &:hover,
    &.react-select__option--is-focused,
    &.react-select__option--is-selected {
      background: rgba(255, 255, 255, 0.1);
      color: #ff868d;
      font-family: Poppins-Regular;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
  }

  .react-select__control.react-select__control--menu-is-open
    .react-select__indicators {
    transform: rotate(-180deg);
  }

  .react-select__menu {
    border-radius: 8px;
    background: linear-gradient(
      360deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 35.94%,
      rgba(106, 70, 165, 1) 61.04%,
      rgba(133, 93, 175, 1) 100%
    );
    overflow: hidden;
    margin: 0;
  }

  .react-select__menu-list {
    overflow-y: auto;
    overflow-x: hidden;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(82, 59, 126, 0.6);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.6);
      border-radius: 4px;
    }
  }

  .react-select__placeholder {
    color: #fbfbfb;
    font-size: 16px;
    font-weight: 400;
    font-family: Poppins-Regular;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
  }

  @media screen and (min-width: 1280px) {
    width: 180px;
  }
`;

export const StyledIconDiagram = styled.div`
  width: 18px;
  height: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
  cursor: pointer;
`;

export const StyledDiagramTab = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 32px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const WrapperDiagramTab = styled.div`
  width: 280px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 160px;
  }
  @media screen and (min-width: 1280px) {
    width: 182px;
  }
`;
