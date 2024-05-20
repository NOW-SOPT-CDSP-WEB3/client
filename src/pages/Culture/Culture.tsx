import styled from 'styled-components';

import AppDownIcon from '@/assets/svg/culture_app_box_download_ic_next.svg?react';
import IconApp from '@/assets/svg/img_dive_app.svg?react';

import CultureCard from './_components/CultureCard';
import { CULTURE_DATA } from './_constants/cultureData';

function Culture() {
  const { categories } = CULTURE_DATA; //객체를 가져오는 다른 방법!
  return (
    <CultureLayout>
      {/* {categories.map((categorie) => {
        const { cultures, name } = categorie;
        return (
          <>
            <CardListBox key={categorie.name}>
              <Name>{name}</Name>
              <InfoBox>
                {cultures.map((Info) => (
                  <CultureCard
                    key={Info.id}
                    description={Info.description}
                    image={Info.image}
                    name={Info.name}
                    summary={Info.summary}
                    period={Info.period}
                  />
                ))}
              </InfoBox>
            </CardListBox>
          </>
        );
      })} */}
      {categories.map((category) => (
        <CardListBox key={category.name}>
          <Name>{category.name}</Name>
          <InfoBox>
            {category.cultures.map((Info) => (
              <CultureCard
                key={Info.id}
                description={Info.description}
                image={Info.image}
                name={Info.name}
                summary={Info.summary}
                period={Info.period}
              />
            ))}
          </InfoBox>
        </CardListBox>
      ))}
      <DiveAppBox>
        <DiveBox>
          <AppImg />
          <AppTitleBox>
            <AppTitleParagraph>현대카드 DIVE</AppTitleParagraph>
            <AppDetailParagraph>놀면 놀수록 빠져드는 컬처 앱</AppDetailParagraph>
          </AppTitleBox>
          <AppDownLoadBox>
            <AppDownLoadParagraph>앱 다운로드</AppDownLoadParagraph>
            <AppDownIcon />
          </AppDownLoadBox>
        </DiveBox>
      </DiveAppBox>
    </CultureLayout>
  );
}

export default Culture;

const CultureLayout = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 9.2rem;
`;
const CardListBox = styled.div`
  align-items: flex-start;
`;
const Name = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.HEAD_01};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-weight: 400;
  font-style: normal;
  line-height: 4.8rem;
  text-align: left;
  margin-bottom: 4rem;
  margin-top: 4.8rem;
`;

const InfoBox = styled.div`
  display: flex;
  width: 90rem;
  align-items: flex-start;
  align-content: flex-start;
  gap: 7.2rem 2.4rem;
  flex-wrap: wrap;
`;

const DiveAppBox = styled.div`
  display: flex;
  width: 136.6rem;
  height: 30.5rem;
  padding: 3.9rem 0rem 3.8rem 0rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${({ theme }) => theme.COLORS.HD_GRAY_04};
`;
const DiveBox = styled.div`
  display: ruby;
  width: 23.9rem;
  height: 22.8rem;
  flex-shrink: 0;
`;
const AppTitleBox = styled.div`
  margin-top: 2.678rem;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const AppImg = styled(IconApp)`
  justify-content: center;
  width: 10.2rem;
  height: 10%.2rem;
  flex-shrink: 0;
`;

const AppTitleParagraph = styled.p`
  justify-content: center;
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_03};
  font-style: normal;
  line-height: normal;
`;

const AppDetailParagraph = styled.p`
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.HD_BLK};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
  font-style: normal;
  line-height: normal;
`;

const AppDownLoadBox = styled.div`
  margin-top: 2.3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
const AppDownLoadParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.HD_BLUE_02};
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_02_BOLD};
  font-style: normal;
  line-height: normal;
`;
