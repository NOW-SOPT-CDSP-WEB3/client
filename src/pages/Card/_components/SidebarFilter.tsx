import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import CheckBox from '@/pages/Card/_components/CheckBox';
import DropDownBox from '@/pages/Card/_components/DropDownBox';
import { CHECK_BOX_DATA } from '@/pages/Card/_constants/cardData';

import CardFinder from '@/assets/svg/img_cardfinder.svg?react';

SidebarFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onAllCheck: PropTypes.func.isRequired, // 새로운 prop 추가
};

interface SidebarFilterProps {
  onFilterChange: (filter: { category: string; tags: string }) => void;
  onAllCheck: () => void; // 새로운 prop 타입 정의
}

function SidebarFilter({ onFilterChange, onAllCheck }: SidebarFilterProps) {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [activeCategories, setActiveCategories] = useState(
    Array(CHECK_BOX_DATA.length).fill(false),
  );
  const [checkboxStates, setCheckboxStates] = useState(
    CHECK_BOX_DATA.map((category) => Array(category.checkboxes.length).fill(false)),
  );

  // 전체보기 체크박스 상태 변경 함수
  const handleCheckChange = () => {
    setIsAllChecked((prev) => !prev);
    if (!isAllChecked) {
      onAllCheck(); // 전체보기 체크박스가 체크되면 전달받은 onAllCheck 함수 호출
    } else {
      onFilterChange({ category: '', tags: '' }); // 전체보기 체크박스가 해제되면 기본 필터 적용
    }
  };

  // 드롭다운 카테고리 활성화 상태 변경 함수
  const handleCategoryClick = (index: number) => {
    setActiveCategories((prev) => prev.map((isActive, i) => (i === index ? !isActive : isActive)));
  };

  // 체크박스 상태 변경 함수
  const handleCheckboxChange = (categoryIndex: number, checkboxIndex: number) => {
    setCheckboxStates((prevStates) => {
      const updatedStates = prevStates.map((category, catIdx) =>
        catIdx === categoryIndex
          ? category.map((checked, chkIdx) => (chkIdx === checkboxIndex ? !checked : checked))
          : category,
      );

      // 필터 업데이트 로직
      const selectedTags: string[] = [];
      let selectedCategory = '';

      updatedStates.forEach((category, catIdx) => {
        const categorySelectedTags: string[] = [];
        category.forEach((checked, chkIdx) => {
          if (checked) {
            categorySelectedTags.push(CHECK_BOX_DATA[catIdx].checkboxes[chkIdx].title);
          }
        });
        if (categorySelectedTags.length > 0) {
          selectedCategory = CHECK_BOX_DATA[catIdx].categoryName;
          selectedTags.push(...categorySelectedTags);
        }
      });

      if (selectedTags.length === 0) {
        onAllCheck(); // 모든 태그가 선택 해제되면 전체 카드를 다시 불러옴
      } else {
        onFilterChange({ category: selectedCategory, tags: selectedTags.join(',') });
      }
      return updatedStates;
    });
  };

  return (
    <SidebarFilterLayout>
      <CheckboxContainer>
        <CheckBox
          size='1.4rem'
          imgSize='0.7rem'
          checked={isAllChecked}
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
