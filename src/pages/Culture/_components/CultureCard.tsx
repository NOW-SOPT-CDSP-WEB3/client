import styled from 'styled-components';

import IconCard from '@/assets/svg/Card_up_주최사_logo.svg?react';
import IconVector from '@/assets/svg/Vector 1.svg?react';

interface ICultureCard {
  description: string;
  image: string;
  name: string;
  summary: string;
  period: string;
}

const CultureCard = ({ description, image, name, summary, period }: ICultureCard) => {
  return (
    <CultureCardLayout>
      <CardUpBox>
        <CardUpCop>
          <CardHost />
          <CardBtn />
        </CardUpCop>
        <Description>{description}</Description>
      </CardUpBox>
      <img src={image} alt='앨범사진' width={284} height={176}></img>
      <CardDownBox>
        <Name>{name}</Name>
        <Summary>{summary}</Summary>
        <Period>{period}</Period>
      </CardDownBox>
    </CultureCardLayout>
  );
};

export default CultureCard;

const CultureCardLayout = styled.div`
  display: flex;
  width: 28.4rem;
  padding-top: 1.3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.6rem;
  flex-shrink: 0;
  border-top: 0.1rem solid ${({ theme }) => theme.COLORS.HD_BLK};
  background: ${({ theme }) => theme.COLORS.HD_WHITE};
`;
const CardUpBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.1rem;
`;
const CardUpCop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16.4rem;
`;
//svg 파일 스타일링
const CardHost = styled(IconCard)`
  width: 8.315rem;
  height: 4.0035rem;
  flex-shrink: 0;
`;

const CardBtn = styled(IconVector)`
  flex-shrink: 0;
`;
const Description = styled.p`
  word-break: keep-all; //단어 단위로 줄바꿈
  max-lines: 2;
  max-width: 30rem;
  height: 5rem;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_04};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-style: normal;
  line-height: normal;
  text-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
`;
const CardDownBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

const Name = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-style: normal;
  line-height: normal;
`;
const Summary = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_02_MED};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-style: normal;
  line-height: normal;
`;

const Period = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_MED};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-style: normal;
  line-height: normal;
`;
