import styled from 'styled-components';

import IconViewAll from '@/assets/svg/home_list_ic_move.svg?react';

function CardExplanation() {
  return (
    <CardExplanationBox>
      <CardTitleText>Hyundai Originals</CardTitleText>
      <CardDetailText>현대카드의 오리지널리티를 담은 진정한 현대카드</CardDetailText>
      <ViewAllBox>
        전체보기 <IconViewAll />
      </ViewAllBox>
      <HashtagWrapperBox>
        <HashtagBox>#프리미엄</HashtagBox>
        <HashtagBox>#쓸 때마다 할인</HashtagBox>
        <HashtagBox>#어디서나 포인트적립</HashtagBox>
        <HashtagBox>#3F 시스템 혜택</HashtagBox>
      </HashtagWrapperBox>
    </CardExplanationBox>
  );
}

const CardExplanationBox = styled.div`
  width: 15.4rem;
  height: 28.3rem;
`;

const CardTitleText = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.HEAD_01};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  line-height: 4.8rem;
  margin-bottom: 0.9rem;
`;

const CardDetailText = styled.p`
  line-height: 1.7rem;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED_17};
  letter-spacing: -0.044rem;
`;

const ViewAllBox = styled.div`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLUE_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
  height: 2.4rem;
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  gap: 0.2rem;
`;

const HashtagWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const HashtagBox = styled.div`
  padding: 0.4rem 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_MED};
`;

export default CardExplanation;
