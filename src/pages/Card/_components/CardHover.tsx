import styled from 'styled-components';

import { formatAmount } from '@/pages/Card/_utils/formatAmount';

interface CardHoverProps {
  hoverInfo1: number;
  hoverInfo2: number;
}

function CardHover({ hoverInfo1, hoverInfo2 }: CardHoverProps) {
  const amount1 = formatAmount(hoverInfo1);
  const amount2 = formatAmount(hoverInfo2);
  return (
    <CardHoverLayout>
      <CardHoverParagraph1>연회비</CardHoverParagraph1>
      <CardHoverParagraph2>VISA</CardHoverParagraph2>
      <CardHoverParagraph3>{`${amount1}원`}</CardHoverParagraph3>
      <CardHoverParagraph2>국내전용</CardHoverParagraph2>
      <CardHoverParagraph3>{`${amount2}원`}</CardHoverParagraph3>
    </CardHoverLayout>
  );
}

export default CardHover;

const CardHoverLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;

  width: 14.1rem;
  height: 22.1rem;
  margin-top: 1.3rem;
  padding-top: 12rem;
  padding-left: 1.6rem;
  border-radius: 8px;

  background: ${({ theme }) => theme.COLORS.HD_GRADI_04};

  opacity: 0;
`;

const CardHoverParagraph1 = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_BOLD};
`;

const CardHoverParagraph2 = styled.p`
  margin-top: 1.1rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_03};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const CardHoverParagraph3 = styled.p`
  margin-top: 0.2rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
`;
