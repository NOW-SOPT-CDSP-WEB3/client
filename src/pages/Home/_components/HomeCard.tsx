import styled from 'styled-components';

interface HomeCardProps {
  imgSrc: string;
  title: string;
}

function HomeCard({ imgSrc, title }: HomeCardProps) {
  return (
    <HomeCardLayout>
      <HomeCardImg src={imgSrc}></HomeCardImg>
      <HomeCardTitle>{title}</HomeCardTitle>
    </HomeCardLayout>
  );
}

const HomeCardLayout = styled.div`
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

const HomeCardImg = styled.img`
  width: 7.6rem;
  height: 12.1rem;
`;

const HomeCardTitle = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_MED};
  text-align: center;
  line-height: normal;
`;
export default HomeCard;
