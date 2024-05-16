import CardBox from './_components/CardBox';
import { CARD_BOX_DATA } from './_constants/cardData';

function Card() {
  return (
    <>
      {CARD_BOX_DATA.map((data, index) => (
        <CardBox key={index} cardBoxTitle={data.cardBoxTitle} />
      ))}
    </>
  );
}

export default Card;
