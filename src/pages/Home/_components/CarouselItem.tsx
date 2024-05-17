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
  height: 337px;
  margin-right: ${({ $marginRight }) => $marginRight};

  &:hover {
    transform: translateY(-8px);
  }

  transition: transform 0.3s ease;
`;

export default CarouselItem;
