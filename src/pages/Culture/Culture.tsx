import { useEffect, useState } from 'react';
import styled from 'styled-components';

import AppDownIcon from '@/assets/svg/culture_app_box_download_ic_next.svg?react';
import IconApp from '@/assets/svg/img_dive_app.svg?react';

import { getCultureData } from '@/api/axios/Culture/cultureAxios';

import CultureCard from './_components/CultureCard';

interface CultureInfo {
  id: number;
  description: string;
  image: string;
  name: string;
  summary: string;
  period: string;
}

interface Category {
  name: string;
  cultures: CultureInfo[];
}

function Culture() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const data = await getCultureData();

      setCategories(data.data.categories);
    } catch {
      console.error(Error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <CultureLayout>
      {categories?.map((category) => (
        <CardListBox key={category.name}>
          <Name>{category.name}</Name>
          <InfoBox>
            {category.cultures.map((Info: CultureInfo) => (
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
  flex-direction: column;
  gap: 9.2rem;
  justify-content: center;
  align-items: center;

  width: 100%;
`;
const CardListBox = styled.div`
  align-items: flex-start;
`;
const Name = styled.h1`
  margin-top: 4.8rem;
  margin-bottom: 4rem;

  font-family: ${({ theme }) => theme.FONTS.HEAD_01};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-style: normal;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  font-weight: 400;
  text-align: left;
  line-height: 4.8rem;
`;

const InfoBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 7.2rem 2.4rem;
  align-items: flex-start;
  align-content: flex-start;

  width: 90rem;
`;

const DiveAppBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 136.6rem;
  height: 30.5rem;
  padding: 3.9rem 0 3.8rem;

  background: ${({ theme }) => theme.COLORS.HD_GRAY_04};
`;
const DiveBox = styled.div`
  display: ruby;
  flex-shrink: 0;

  width: 23.9rem;
  height: 22.8rem;
`;
const AppTitleBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;

  margin-top: 2.678rem;
`;

const AppImg = styled(IconApp)`
  justify-content: center;
  flex-shrink: 0;

  width: 10.2rem;
  height: 10%.2rem;
`;

const AppTitleParagraph = styled.p`
  justify-content: center;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-style: normal;
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_03};
  text-align: center;
  line-height: normal;
`;

const AppDetailParagraph = styled.p`
  justify-content: center;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-style: normal;
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
  text-align: center;
  line-height: normal;
`;

const AppDownLoadBox = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  margin-top: 2.3rem;
`;
const AppDownLoadParagraph = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLUE_02};
  font-style: normal;
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_02_BOLD};
  text-align: center;
  line-height: normal;
`;
