import styled from 'styled-components';

import IconViewAll from '@/assets/svg/home_list_ic_move.svg?react';

interface HomeCardExplanationProps {
  cardTitle: string;
  cardDetail: string;
  hashtags: string[];
}

function HomeCardExplanation({ cardTitle, cardDetail, hashtags }: HomeCardExplanationProps) {
  return (
    <HomeCardExplanationBox>
      <HomeCardTitleText>{cardTitle}</HomeCardTitleText>
      <HomeCardDetailText>{cardDetail}</HomeCardDetailText>
      <ViewAllBox>
        전체보기 <IconViewAll />
      </ViewAllBox>
      <HashtagWrapperBox>
        {hashtags.map((hashtag) => (
          <HashtagBox key={hashtag}>#{hashtag}</HashtagBox>
        ))}
      </HashtagWrapperBox>
    </HomeCardExplanationBox>
  );
}

const HomeCardExplanationBox = styled.div`
  width: 15.4rem;
  height: 28.3rem;
`;

const HomeCardTitleText = styled.h1`
  margin-bottom: 0.9rem;
  -webkit-text-stroke-width: 0.3rem;
  -webkit-text-stroke-color: ${({ theme }) => theme.COLORS.HD_BLK};

  font-family: ${({ theme }) => theme.FONTS.HEAD_01};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  line-height: 4.8rem;
`;

const HomeCardDetailText = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED_17};
  line-height: 1.7rem;
  letter-spacing: -0.044rem;
`;

const ViewAllBox = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;

  height: 2.4rem;
  margin-bottom: 2.5rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLUE_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const HashtagWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
`;

const HashtagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.4rem 0.9rem;
  border: 0.5px solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  border-radius: 12px;

  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_MED};
`;

export default HomeCardExplanation;
