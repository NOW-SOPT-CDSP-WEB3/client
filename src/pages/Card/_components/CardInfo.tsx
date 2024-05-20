import styled from 'styled-components';

import CardInfoContent2 from '@/assets/svg/benefit_warning.svg?react';
import CardInfoContent1 from '@/assets/svg/card_info_content.svg?react';

function CardInfo() {
  return (
    <CardInfoLayout>
      <CardInfoTitle>이용 안내</CardInfoTitle>
      <CardInfoContent1 />
      <CardInfoLine />
      <CardInfoContent2 />
    </CardInfoLayout>
  );
}

export default CardInfo;

const CardInfoLayout = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 31.3rem;
  padding-bottom: 15.7rem;
`;

const CardInfoTitle = styled.h3`
  margin-bottom: 2.2rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_01_BOLD};
`;

const CardInfoLine = styled.div`
  width: 91.2rem;
  height: 0.1rem;
  margin: 3.4rem 0;

  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_03};
`;
