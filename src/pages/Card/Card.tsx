import CardContent from '@/pages/Card/_components/CardContent';

import { CARD_DATA } from './_constants/cardData';

function Card() {
  return (
    <>
      {CARD_DATA.map((data, index) => (
        <CardContent
          key={index}
          cardTitle={data.cardTitle}
          cardSrc={data.cardSrc}
          cardTarget={data.cardTarget}
          cardInfo={data.cardInfo}
        />
      ))}
    </>
  );
}

export default Card;
