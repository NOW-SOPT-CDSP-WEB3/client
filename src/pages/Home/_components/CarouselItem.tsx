import styled from 'styled-components';

interface CarouselItemProps {
  src: string;
  alt: string;
  width: string;
  marginRight: string;
}

function CarouselItem({ src, alt, width, marginRight }: CarouselItemProps) {
  return <Image src={src} alt={alt} $width={width} $marginRight={marginRight} />;
}

const Image = styled.img<{ $width: string; $marginRight: string }>`
  width: ${({ $width }) => $width};
  height: 33.7rem;
  margin-right: ${({ $marginRight }) => $marginRight};

  &:hover {
    transform: translateY(-0.8rem);
  }

  transition: transform 0.3s ease;
`;

export default CarouselItem;
