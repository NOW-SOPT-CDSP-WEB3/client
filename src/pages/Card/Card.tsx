import CardBox from '@/pages/Card/_components/CardBox';
import { CARD_BOX_DATA, CHECK_BOX_DATA } from '@/pages/Card/_constants/cardData';

import DropDownMenu from './_components/DropDownMenu';

function Card() {
  return (
    <>
      <DropDownMenu numberOfCheckboxes={CHECK_BOX_DATA.length} />
      {CARD_BOX_DATA.map((data, index) => (
        <CardBox key={index} cardBoxTitle={data.cardBoxTitle} />
      ))}
    </>
  );
}

export default Card;
