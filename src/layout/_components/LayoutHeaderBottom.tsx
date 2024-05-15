import styled from 'styled-components';

import NextIcon from '@/assets/svg/bar_record_ic_next.svg?react';

function LayoutHeaderBottom() {
  return (
    <HeaderBottomBox>
      <HeaderBottomBreadcrumbsList>
        <HeaderBottomBreadccumbsItem>홈</HeaderBottomBreadccumbsItem>
        <NextIconBox>
          <NextIcon />
        </NextIconBox>
        <HeaderBottomBreadccumbsItem>컬쳐</HeaderBottomBreadccumbsItem>
      </HeaderBottomBreadcrumbsList>

      <LoginBox>
        <LoginButton>로그인</LoginButton>
        <SignUpButton>회원가입</SignUpButton>
      </LoginBox>
    </HeaderBottomBox>
  );
}

export default LayoutHeaderBottom;

const HeaderBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  width: 100%;
  height: 42px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const HeaderBottomBreadcrumbsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const HeaderBottomBreadccumbsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const NextIconBox = styled.div``;

const HeaderBottomButton = styled.button`
  display: flex;
  width: 56px;
  height: 24px;
  padding: 0px 1px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 0;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const LoginButton = styled(HeaderBottomButton)`
  background-color: ${({ theme }) => theme.COLORS.HD_BLK};
  color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;
const SignUpButton = styled(HeaderBottomButton)`
  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_04};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
