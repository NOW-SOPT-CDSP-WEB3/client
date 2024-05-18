import styled from 'styled-components';

import CultureCard from './_components/CultureCard';
import { CULTURE_DATA } from './_constants/cultureData';

function Culture() {
  const { categories } = CULTURE_DATA; //객체를 가져오는 다른 방법!
  return (
    <CultureBody>
      {categories.map((categorie) => {
        const { cultures, name } = categorie;
        return (
          <>
            <CardListWrapper>
              <Name>{name}</Name>
              <InfoWrapper>
                {cultures.map((Info) => (
                  <CultureCard
                    key={Info.name}
                    description={Info.description}
                    image={Info.image}
                    name={Info.name}
                    summary={Info.summary}
                    period={Info.period}
                  />
                ))}{' '}
              </InfoWrapper>
            </CardListWrapper>
          </>
        );
      })}
    </CultureBody>
  );
}

export default Culture;

const CultureBody = styled.div`
  //전체적인 박스 가운데로 오게 하다가 끝남
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* align-content: flex-start; */
`;
const CardListWrapper = styled.div`
  align-items: flex-start;
`;
const Name = styled.h1`
  font-family: ${({ theme }) => theme.HEAD_01};
  font-size: ${({ theme }) => theme.FONT_SIZE.HEAD_01};
  color: ${({ theme }) => theme.HD_BLK};
  font-style: normal;
  line-height: 48px; /* 137.143% */
  text-align: left;
`;

const InfoWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  display: flex;
  width: 900px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 72px 24px;
  flex-wrap: wrap;
`;
