import styled from 'styled-components';

interface CardProps {
  imgSrc: string;
  title: string;
}

function Card({ imgSrc, title }: CardProps) {
  return (
    <CardLayout>
      <CardImg src={imgSrc}></CardImg>
      <CardTitle>{title}</CardTitle>
    </CardLayout>
  );
}

const CardLayout = styled.div`
  width: 14rem;
  height: 14.6rem;
  padding: 0 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

const CardImg = styled.img``;

const CardTitle = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED};
  line-height: normal;
  text-align: center;
`;
export default Card;
