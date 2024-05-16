import styled from 'styled-components';

import IconBannerPlay from '@/assets/svg/home_banner_btn_play.svg';
import IconBannerStop from '@/assets/svg/home_banner_btn_stop.svg';

interface CarouselDotsProps {
  total: number;
  activeIndex: number;
  handleClickDotBtn: (index: number) => void;
  handleClickAutoSlide: () => void;
  isAutoSlide: boolean;
}

function CarouselDots({
  total,
  activeIndex,
  handleClickDotBtn,
  handleClickAutoSlide,
  isAutoSlide,
}: CarouselDotsProps) {
  return (
    <CarouselDotsBox>
      <BannerPlayButton
        onClick={handleClickAutoSlide}
        $isAutoSlide={isAutoSlide}
      ></BannerPlayButton>
      {Array.from({ length: total }).map((_, index) => (
        <DotBox
          key={index}
          $isActive={index === activeIndex}
          onClick={() => handleClickDotBtn(index)}
        />
      ))}
    </CarouselDotsBox>
  );
}

const CarouselDotsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;

  max-width: 148px;
  height: 24px;
`;

const BannerPlayButton = styled.button<{ $isAutoSlide: boolean }>`
  width: 15px;
  height: 8px;
  margin-right: 14px;
  border: none;

  background-image: url(${({ $isAutoSlide }) => ($isAutoSlide ? IconBannerPlay : IconBannerStop)});
`;

const DotBox = styled.div<{ $isActive: boolean }>`
  width: 6px;
  height: 6px;
  margin-top: 1px;
  margin-right: 6px;
  border-radius: 50%;

  background: ${({ $isActive, theme }) =>
    $isActive ? theme.COLORS.HD_BLK : theme.COLORS.HD_GRAY_03};

  cursor: pointer;
`;

export default CarouselDots;
