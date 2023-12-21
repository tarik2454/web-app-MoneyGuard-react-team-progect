import styled from 'styled-components';

export const SummaryPageStyled = styled.div``;

export const SummaryPageContStyled = styled.div`
  background-color: transparent;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 28px 0 0 0;
  gap: 32px;
  width: 320px;

  @media screen and (min-width: 768px) {
    width: 704px;
    flex-direction: row;
    padding: 0;
  }

  @media screen and (min-width: 1280px) {
    width: 800px;
  }
`;

export const SummaryTitleStyled = styled.div`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.colorText};
  font-family: Poppins-Regular;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
  }
`;
