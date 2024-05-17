import CardBox from '@/pages/Card/_components/CardBox';
import { CARD_BOX_DATA } from '@/pages/Card/_constants/cardData';

import DropDownBox from './_components/DropDownBox';

function Card() {
  return (
    <>
      <DropDownBox />
      {CARD_BOX_DATA.map((data, index) => (
        <CardBox key={index} cardBoxTitle={data.cardBoxTitle} />
      ))}
    </>
  );
}

export default Card;
