import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import IconBannerMoveBtn from '@/assets/svg/btn_home_banner_back.svg';

import { CAROUSEL_DATA } from '@/constants/carouselDate';

import CarouselDots from './CarouselDots';
import CarouselItem from './CarouselItem';

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPage = Math.ceil(CAROUSEL_DATA.length / itemsPerPage);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselContentRef.current) {
      setSlideWidth(carouselContentRef.current.clientWidth);
    }
  }, []);

  const handlePrevBtn = () => {
    const newIndex =
      currentIndex === 0 ? CAROUSEL_DATA.length - itemsPerPage : currentIndex - itemsPerPage;
    setCurrentIndex(newIndex);
  };

  const handleNextBtn = () => {
    const newIndex =
      currentIndex + itemsPerPage >= CAROUSEL_DATA.length ? 0 : currentIndex + itemsPerPage;
    setCurrentIndex(newIndex);
  };

  const handleClickDotBtn = (index: number) => {
    setCurrentIndex(index * itemsPerPage);
  };

  const translateX = -(currentIndex * (slideWidth / itemsPerPage));

  return (
    <CarouselSection>
      <CarouselWrapperBox ref={carouselContentRef}>
        <CarouselContentBox translateX={translateX}>
          {CAROUSEL_DATA.map((item, index) => (
            <CarouselItem
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={index % 3 === 0 ? '445px' : '214px'}
              height='337px'
              marginRight={index % 3 === 2 ? '0px' : '20px'}
            />
          ))}
        </CarouselContentBox>
        <BannerButton onClick={handlePrevBtn} icon={IconBannerMoveBtn} />
        <BannerButton onClick={handleNextBtn} icon={IconBannerMoveBtn} />
      </CarouselWrapperBox>
      <CarouselDots
        total={totalPage}
        activeIndex={Math.floor(currentIndex / itemsPerPage)}
        onClick={handleClickDotBtn}
      />
    </CarouselSection>
  );
}

const CarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 913px;
  height: 361px;
  overflow: hidden;
`;

const CarouselWrapperBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const BannerButton = styled.button<{ icon: string }>`
  position: absolute;
  width: 40px;
  height: 40px;
  border: none;
  cursor: pointer;
  background: none;
  background-image: url(${(props) => props.icon});
  &:last-child {
    right: 0;
    rotate: 180deg;
  }
`;
const CarouselContentBox = styled.div<{ translateX: number }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  transform: ${(props) => `translateX(${props.translateX}px)`};
  transition: transform 0.4s ease-in-out;
`;
export default Carousel;
