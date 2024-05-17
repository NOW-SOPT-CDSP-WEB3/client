import styled from 'styled-components';

import CardFinder from '@/assets/svg/img_cardfinder.svg?react';

import CheckBox from './CheckBox';
import DropDownBox from './DropDownBox';

function SidebarFilter() {
  return (
    <SidebarFilterLayout>
      <CheckboxContainer>
        <CheckBox size='1.4rem' imgSize='0.7rem' checked={true} onChange={() => {}} />
        <Label>전체보기</Label>
      </CheckboxContainer>
      <DropDownBox />
      <CardFinder />
    </SidebarFilterLayout>
  );
}

export default SidebarFilter;

const SidebarFilterLayout = styled.div`
  margin-left: 3.6rem;
  margin-top: 6.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
  margin-left: 0.7rem;
`;
