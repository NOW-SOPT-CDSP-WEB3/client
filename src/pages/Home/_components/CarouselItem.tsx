import styled from 'styled-components';

interface CarouselItemProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  marginRight: string;
}

function CarouselItem({ src, alt, width, height, marginRight }: CarouselItemProps) {
  return <Image src={src} alt={alt} width={width} height={height} marginRight={marginRight} />;
}

const Image = styled.img<{ width: string; height: string; marginRight: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-right: ${(props) => props.marginRight};
`;

export default CarouselItem;
