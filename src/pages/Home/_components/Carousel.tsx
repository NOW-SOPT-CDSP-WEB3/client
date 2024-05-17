import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import CarouselDots from '@/pages/Home/_components/CarouselDots';
import CarouselItem from '@/pages/Home/_components/CarouselItem';

import IconBannerMoveBtn from '@/assets/svg/btn_home_banner_back.svg';

import { CAROUSEL_DATA } from '@/constants/carouselDate';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselItemBoxRef = useRef<HTMLDivElement>(null);
  const [isAutoSlide, setIsAutoSlide] = useState(true);
  const itemsPerPage = 3;
  const totalPage = Math.ceil(CAROUSEL_DATA.length / itemsPerPage);
  const translateX = -(currentIndex * (slideWidth / itemsPerPage));

  const handleNextBtn = useCallback(() => {
    const newIndex =
      currentIndex + itemsPerPage >= CAROUSEL_DATA.length ? 0 : currentIndex + itemsPerPage;
    setCurrentIndex(newIndex);
  }, [currentIndex, itemsPerPage]);

  const handlePrevBtn = () => {
    const newIndex =
      currentIndex === 0 ? CAROUSEL_DATA.length - itemsPerPage : currentIndex - itemsPerPage;
    setCurrentIndex(newIndex);
  };

  const handleClickDotBtn = (index: number) => {
    setCurrentIndex(index * itemsPerPage);
  };

  const handleClickAutoSlide = () => {
    setIsAutoSlide(!isAutoSlide);
  };

  useEffect(() => {
    // 항상 913으로 같지만 카라셀은 현재 보이는 만큼 밀어야 하니 useRef의 current, clientWidth를 통해서 width를 알아냈다.
    if (carouselItemBoxRef.current) {
      console.log(carouselItemBoxRef.current.clientWidth);
      setSlideWidth(carouselItemBoxRef.current.clientWidth);
    }
  }, [carouselItemBoxRef]);

  useEffect(() => {
    if (isAutoSlide) {
      const interval = setInterval(handleNextBtn, 3000);
      return () => clearInterval(interval);
    }
  }, [handleNextBtn, isAutoSlide]);

  return (
    <CarouselSection>
      <CarouselWrapperBox>
        <CarouselItemBox ref={carouselItemBoxRef} $translateX={translateX}>
          {CAROUSEL_DATA.map(({ src, alt }, index) => (
            <CarouselItem
              key={index}
              src={src}
              alt={alt}
              width={index % 3 === 0 ? '445px' : '214px'}
              marginRight={index % 3 === 2 ? '0px' : '20px'}
            />
          ))}
        </CarouselItemBox>
        <BannerButton onClick={handlePrevBtn} $icon={IconBannerMoveBtn} />
        <BannerButton onClick={handleNextBtn} $icon={IconBannerMoveBtn} />
      </CarouselWrapperBox>
      <CarouselDots
        total={totalPage}
        activeIndex={Math.floor(currentIndex / itemsPerPage)}
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

  max-width: 913px;
  height: 361px;
`;

const CarouselWrapperBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const BannerButton = styled.button<{ $icon: string }>`
  position: absolute;

  width: 40px;
  height: 40px;
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
  transform: ${({ $translateX }) => `translateX(${$translateX}px)`};
`;
export default Carousel;
