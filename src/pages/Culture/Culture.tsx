import styled from 'styled-components';

import App from '@/assets/svg/img_dive_app.svg?react';

import CultureCard from './_components/CultureCard';
import { CULTURE_DATA } from './_constants/cultureData';

function Culture() {
  const { categories } = CULTURE_DATA; //객체를 가져오는 다른 방법!
  return (
    <CultureBody>
      {categories.map((categorie) => {
        const { cultures, name } = categorie;
        return (
          <>
            <CardListWrapper>
              <Name>{name}</Name>
              <InfoWrapper>
                {cultures.map((Info) => (
                  <CultureCard
                    key={name}
                    description={Info.description}
                    image={Info.image}
                    name={Info.name}
                    summary={Info.summary}
                    period={Info.period}
                  />
                ))}
              </InfoWrapper>
            </CardListWrapper>
          </>
        );
      })}
      <DiveApp>
        <AppImg />
        <AppTitle>현대카드 DIVE</AppTitle>
        <AppDetail>놀면 놀수록 빠져드는 컬처 앱</AppDetail>
      </DiveApp>
    </CultureBody>
  );
}

export default Culture;

const CultureBody = styled.div`
  //전체적인 박스 가운데로 오게 하다가 끝남
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 9.2rem;
  /* align-content: flex-start; */
`;
const CardListWrapper = styled.div`
  align-items: flex-start;
`;
const Name = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.HEAD_01};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-weight: 400;
  font-style: normal;
  line-height: 48px; /* 137.143% */
  text-align: left;
  margin-bottom: 4rem;
  margin-top: 4.8rem;
`;

const InfoWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  width: 900px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 72px 24px;
  flex-wrap: wrap;
`;

const DiveApp = styled.div`
  display: flex;
  width: 1366px;
  height: 305px;
  padding: 39px 0px 38px 0px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${({ theme }) => theme.COLORS.HD_GRAY_04};
`;

const AppImg = styled(App)`
  width: 102px;
  height: 102px;
  flex-shrink: 0;
`;

const AppTitle = styled.p`
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_04};
  font-style: normal;
  line-height: normal;
`;

const AppDetail = styled.p`
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
  font-style: normal;
  line-height: normal;
`;
