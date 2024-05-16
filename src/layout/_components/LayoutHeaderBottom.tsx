import styled from 'styled-components';

import NextIcon from '@/assets/svg/bar_record_ic_next.svg?react';

import { MAIN_ROUTES } from '@/constants/routes';

import LayoutAuthButtons from './LayoutAuthButtons';

interface ILayoutHeaderBottom {
  pathname: string;
}

function LayoutHeaderBottom({ pathname }: ILayoutHeaderBottom) {
  const mainRoutes = { ...MAIN_ROUTES };
  const currentRoute = Object.values(mainRoutes).find((route) => route.path === pathname);
  const title = currentRoute ? currentRoute.title : '';

  return (
    <HeaderBottomBox>
      <HeaderBottomBreadcrumbsList>
        <HeaderBottomBreadccumbsItem>홈</HeaderBottomBreadccumbsItem>
        <NextIconBox>
          <NextIcon />
        </NextIconBox>
        <HeaderBottomBreadccumbsItem>{title}</HeaderBottomBreadccumbsItem>
      </HeaderBottomBreadcrumbsList>
      <LayoutAuthButtons />
    </HeaderBottomBox>
  );
}

export default LayoutHeaderBottom;

const HeaderBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 42px;
  padding: 0 36px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.HD_GRAY_03};

  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const HeaderBottomBreadcrumbsList = styled.ul`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

const HeaderBottomBreadccumbsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
`;

const NextIconBox = styled.div``;

const HeaderBottomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 24px;
  padding: 0 1px;
  border: 0;
  border-radius: 5px;

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
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
