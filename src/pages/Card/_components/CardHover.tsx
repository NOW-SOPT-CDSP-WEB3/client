import styled from 'styled-components';

interface CardHoverProps {
  hoverInfo1: number;
  hoverInfo2: number;
}

function CardHover({ hoverInfo1, hoverInfo2 }: CardHoverProps) {
  return (
    <CardHoverLayout>
      <CardHoverParagraph1>연회비</CardHoverParagraph1>
      <CardHoverParagraph2>VISA</CardHoverParagraph2>
      <CardHoverParagraph3>{`${hoverInfo1}원`}</CardHoverParagraph3>
      <CardHoverParagraph2>국내전용</CardHoverParagraph2>
      <CardHoverParagraph3>{`${hoverInfo2}원`}</CardHoverParagraph3>
    </CardHoverLayout>
  );
}

export default CardHover;

const CardHoverLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 14.1rem;
  height: 22.1rem;
  background: ${({ theme }) => theme.COLORS.HD_GRADI_04};
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 1.6rem;
  padding-top: 12rem;
  border-radius: 8px;
  margin-top: 1.3rem;
`;

const CardHoverParagraph1 = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_04_BOLD};
`;

const CardHoverParagraph2 = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_03};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
  margin-top: 1.1rem;
`;

const CardHoverParagraph3 = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
  margin-top: 0.2rem;
`;
