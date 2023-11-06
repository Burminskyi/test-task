import { styled } from "styled-components";

export const StyledSearchForm = styled.form`
  display: flex;
  width: 274px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;
  @media (min-width: 624px) {
    flex-direction: row;
    width: 100%;
    align-items: end;
  }
`;

export const StyledSearchFormInput = styled.input`
  display: flex;
  width: 160px;
  height: 48px;
  padding: 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  &.left {
    border-radius: 14px 0px 0px 14px;
  }
  &.right {
    border-radius: 0px 14px 14px 0px;
  }
  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const StyledCarSelect = styled.select`
  height: 48px;
  padding: 14px 18px;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  &.carName {
    width: 224px;
  }
  &.carPrice {
    width: 224px;
    @media (min-width: 624px) {
      width: 125px;
    }
  }
`;

export const StyledCarSelectTitle = styled.p`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

export const StyledCarSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledSearchFormInputWrap = styled.div`
  display: flex;
`;

export const StyledSearchBtn = styled.button`
  border: none;
  height: 48px;
  width: 224px;
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: var(--White, #fff);
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  &:hover {
    background: #0b44cd;
  }
  @media (min-width: 624px) {
    width: 136px;
  }
`;
