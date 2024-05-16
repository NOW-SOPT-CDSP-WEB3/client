import styled from 'styled-components';

import IconBannerPlay from '@/assets/svg/home_banner_btn_play.svg';
import IconBannerStop from '@/assets/svg/home_banner_btn_stop.svg';

interface CarouselDotsProps {
  total: number;
  activeIndex: number;
  onClick: (index: number) => void;
}

function CarouselDots({ total, activeIndex, onClick }: CarouselDotsProps) {
  return (
    <CarouselDotsBox>
      <BannerButton icon={IconBannerPlay}></BannerButton>
      {Array.from({ length: total }).map((_, index) => (
        <Dot key={index} isActive={index === activeIndex} onClick={() => onClick(index)} />
      ))}
    </CarouselDotsBox>
  );
}

const CarouselDotsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  max-width: 148px;
`;

const BannerButton = styled.button<{ icon: string }>`
  background-image: url(${(props) => props.icon});
  width: 15px;
  height: 8px;
  border: none;
  margin-right: 14px;
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  margin-right: 6px;
  margin-top: 1px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? '#000' : '#bbb')};
`;

export default CarouselDots;
