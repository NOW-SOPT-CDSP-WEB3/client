import styled from 'styled-components';

interface CarouselItemProps {
  src: string;
  alt: string;
  width: string;
  marginRight: string;
}

function CarouselItem({ src, alt, width, marginRight }: CarouselItemProps) {
  return <Image src={src} alt={alt} width={width} marginRight={marginRight} />;
}

const Image = styled.img<{ width: string; marginRight: string }>`
  width: ${(props) => props.width};
  height: 337px;
  margin-right: ${(props) => props.marginRight};
`;

export default CarouselItem;
