import { useState } from 'react';
import styled from 'styled-components';

import { CHECK_BOX_DATA } from '@/pages/Card/_constants/cardData';

import CardFinder from '@/assets/svg/img_cardfinder.svg?react';

import CheckBox from './CheckBox';
import DropDownBox from './DropDownBox';

function SidebarFilter() {
  const [checkedState, setCheckedState] = useState(false);
  const [activeCategories, setActiveCategories] = useState(
    Array(CHECK_BOX_DATA.length).fill(false),
  );
  const [checkboxStates, setCheckboxStates] = useState(
    CHECK_BOX_DATA.map((category) => Array(category.checkboxes.length).fill(false)),
  );

  // 전체보기 체크박스 상태 변경 함수
  const handleCheckChange = () => {
    setCheckedState(!checkedState);
  };

  // 드롭다운 카테고리 활성화 상태 변경 함수
  const handleCategoryClick = (index: number) => {
    setActiveCategories((prev) => prev.map((isActive, i) => (i === index ? !isActive : isActive)));
  };

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (categoryIndex: number, checkboxIndex: number) => {
    setCheckboxStates((prevStates) =>
      prevStates.map((category, catIdx) =>
        catIdx === categoryIndex
          ? category.map((checked, chkIdx) => (chkIdx === checkboxIndex ? !checked : checked))
          : category,
      ),
    );
  };

  return (
    <SidebarFilterLayout>
      <CheckboxContainer>
        <CheckBox
          size='1.4rem'
          imgSize='0.7rem'
          checked={checkedState}
          onChange={handleCheckChange}
        />
        <Label>전체보기</Label>
      </CheckboxContainer>
      <DropDownBox
        checkBoxData={CHECK_BOX_DATA}
        activeCategories={activeCategories}
        onCategoryClick={handleCategoryClick}
        checkboxStates={checkboxStates}
        onCheckboxChange={handleCheckboxChange}
      />
      <CardFinder />
    </SidebarFilterLayout>
  );
}

export default SidebarFilter;

const SidebarFilterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 6.8rem;
  margin-left: 3.6rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin-left: 0.7rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;
