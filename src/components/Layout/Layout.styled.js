const { default: styled } = require('styled-components');

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 100%;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 0 20px 0 20px;
  flex-direction: column;
`;

export const WrapperNavBalCur = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 32px;

  @media screen and (min-width: 1280px) {
    gap: 49px;
  }
`;

export const WrapperNavCur = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (min-width: 1280px) {
    width: inherit;

    &::after {
      display: block;
      content: '';
      height: 100%;
      width: 1px;
      background-color: #fbfbfb;

      position: absolute;
      right: -1px;
    }
  }
`;

export const WrapperOutlet = styled.div`
  @media screen and (min-width: 1280px) {
    width: 100%;
    margin-top: 46px;
  }
`;
