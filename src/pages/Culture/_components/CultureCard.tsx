import styled from 'styled-components';

// import CardUp from '@/assets/svg/Card_up_주최사_logo.svg?react';
//import Vector from '@/assets/svg/Vector 1.svg?react';

interface ICultureCard {
  description: string;
  image: string;
  name: string;
  summary: string;
  period: string;
}

const CultureCard = ({ description, image, name, summary, period }: ICultureCard) => {
  return (
    <CultureCardWrapper>
      {/* <CardUp /> */}
      {/* <Vector /> */}
      <Description>{description}</Description>
      <img src={image} alt='앨범사진' width={284} height={176}></img>
      <CardDown>
        <Name>{name}</Name>
        <Summary>{summary}</Summary>
        <Period>{period}</Period>
      </CardDown>
    </CultureCardWrapper>
  );
};

export default CultureCard;

const CultureCardWrapper = styled.div`
  display: flex;
  width: 284px;
  padding-top: 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  flex-shrink: 0;
  border-top: 1px solid ${({ theme }) => theme.HD_BLK};
  background: ${({ theme }) => theme.HD_WHITE};
`;
const Description = styled.p`
  white-space: pre-wrap;
  word-break: keep-all; //단어 단위로 줄바꿈
  max-width: 19rem;
  height: 5rem;
  max-lines: 2;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_04};
  color: ${({ theme }) => theme.HD_BLK};
  font-style: normal;
  line-height: normal;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 284px;
  padding-top: 13px;
  flex-direction: column;
  align-items: flex-start;
  gap: 26px;
  flex-shrink: 0;
`;
const CardDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const Name = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED};
  color: ${({ theme }) => theme.HD_GRAY_02};
  font-style: normal;
  line-height: normal;
`;
const Summary = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_02_MED};
  color: ${({ theme }) => theme.HD_BLK};
  font-style: normal;
  line-height: normal;
`;

const Period = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_MED};
  color: ${({ theme }) => theme.HD_GRAY_02};
  font-style: normal;
  line-height: normal;
`;
