import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import CarouselDots from '@/pages/Home/_components/CarouselDots';
import CarouselItem from '@/pages/Home/_components/CarouselItem';
import { CAROUSEL_DATA } from '@/pages/Home/_constants/carouselData';

import IconBannerMoveBtn from '@/assets/svg/btn_home_banner_back.svg';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideWidth = 913;
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const itemsPerPage = 3;
  const totalPage = Math.ceil(CAROUSEL_DATA.length / itemsPerPage);
  const translateX = -((currentIndex * slideWidth) / 10);

  const handleNextBtn = useCallback(() => {
    const newIndex = currentIndex + 1 >= totalPage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, totalPage]);

  const handlePrevBtn = () => {
    const newIndex = currentIndex === 0 ? totalPage - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleClickDotBtn = (index: number) => {
    setCurrentIndex(index);
  };

  const handleClickAutoSlide = () => {
    setIsAutoSlide(!isAutoSlide);
  };

  useEffect(() => {
    if (isAutoSlide) {
      const interval = setInterval(handleNextBtn, 3000);
      return () => clearInterval(interval);
    }
  }, [handleNextBtn, isAutoSlide]);

  return (
    <CarouselSection>
      <CarouselWrapperBox>
        <CarouselItemBox $translateX={translateX}>
          {CAROUSEL_DATA.map(({ src, alt }, index) => (
            <CarouselItem
              key={index}
              src={src}
              alt={alt}
              width={index % 3 === 0 ? '44.5rem' : '21.4rem'}
              marginRight={index % 3 === 2 ? '0rem' : '2rem'}
            />
          ))}
        </CarouselItemBox>
        <BannerButton onClick={handlePrevBtn} $icon={IconBannerMoveBtn} />
        <BannerButton onClick={handleNextBtn} $icon={IconBannerMoveBtn} />
      </CarouselWrapperBox>
      <CarouselDots
        total={totalPage}
        activeIndex={Math.floor(currentIndex)}
        handleClickDotBtn={handleClickDotBtn}
        handleClickAutoSlide={handleClickAutoSlide}
        isAutoSlide={isAutoSlide}
      />
    </CarouselSection>
  );
}

const CarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;

  max-width: 91.3rem;
  height: 36.1rem;
`;

const CarouselWrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const BannerButton = styled.button<{ $icon: string }>`
  position: absolute;

  width: 4rem;
  height: 4rem;
  border: none;

  background: none;
  background-image: url(${({ $icon }) => $icon});

  cursor: pointer;

  &:last-child {
    right: 0;
    rotate: 180deg;
  }
`;
const CarouselItemBox = styled.div<{ $translateX: number }>`
  display: flex;
  justify-content: space-between;

  width: 100%;

  transition: transform 0.4s ease-in-out;
  transform: ${({ $translateX }) => `translateX(${$translateX}rem)`};
`;
export default Carousel;
