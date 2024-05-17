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
  height: 4.2rem;
  padding: 0 3.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.HD_GRAY_03};

  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const HeaderBottomBreadcrumbsList = styled.ul`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
`;

const HeaderBottomBreadccumbsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.4rem;
  height: 2.4rem;
`;

const NextIconBox = styled.div``;
