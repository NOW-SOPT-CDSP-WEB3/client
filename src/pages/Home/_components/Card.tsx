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
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;

  width: 14rem;
  height: 14.6rem;
  padding: 0 2.25rem;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-1rem);
  }
`;

const CardImg = styled.img``;

const CardTitle = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED};
  text-align: center;
  line-height: normal;
`;
export default Card;
