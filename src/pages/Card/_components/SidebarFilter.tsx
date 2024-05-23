import { useState } from 'react';
import styled from 'styled-components';

import CheckBox from '@/pages/Card/_components/CheckBox';
import DropDownBox from '@/pages/Card/_components/DropDownBox';
import { CHECK_BOX_DATA } from '@/pages/Card/_constants/cardData';

import CardFinder from '@/assets/svg/img_cardfinder.svg?react';

interface SidebarFilterProps {
  onFilterChange: (filter: { category: string; tags: string }) => void;
  onAllCheck: () => void;
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function SidebarFilter({ onFilterChange, onAllCheck, setSelectedTags }: SidebarFilterProps) {
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [activeCategories, setActiveCategories] = useState(
    Array(CHECK_BOX_DATA.length).fill(false),
  );
  const [checkboxStates, setCheckboxStates] = useState(
    CHECK_BOX_DATA.map((category) => Array(category.checkboxes.length).fill(false)),
  );
  const [lastSelectedCategory, setLastSelectedCategory] = useState<number | null>(null);

  // "전체보기" 체크박스 변경
  const handleCheckChange = () => {
    const newAllChecked = !isAllChecked;
    setIsAllChecked(newAllChecked);
    if (newAllChecked) {
      // "전체보기"가 체크되면 모든 체크박스를 해제하고, 전체카드를 가져옴
      setCheckboxStates(
        CHECK_BOX_DATA.map((category) => Array(category.checkboxes.length).fill(false)),
      );
      onAllCheck();
    } else {
      onAllCheck(); // 전체보기 해제 시에도 전체카드를 다시 가져옴
    }
  };

  // 카테고리 클릭
  const handleCategoryClick = (index: number) => {
    setActiveCategories((prev) => prev.map((isActive, i) => (i === index ? !isActive : isActive)));
  };

  // 개별 체크박스 변경
  const handleCheckboxChange = (categoryIndex: number, checkboxIndex: number) => {
    setIsAllChecked(false);
    setCheckboxStates((prevStates) => {
      const updatedStates = prevStates.map((category, catIdx) => {
        const isMultipleSelectionAllowed =
          CHECK_BOX_DATA[catIdx].categoryName === 'HYUNDAI_ORIGINALS' ||
          CHECK_BOX_DATA[catIdx].categoryName === 'CHAMPION_BRANDS';

        if (catIdx === categoryIndex) {
          return category.map((checked, chkIdx) =>
            chkIdx === checkboxIndex ? !checked : isMultipleSelectionAllowed ? checked : false,
          );
        }
        return category;
      });

      if (lastSelectedCategory !== null && lastSelectedCategory !== categoryIndex) {
        updatedStates[lastSelectedCategory] = updatedStates[lastSelectedCategory].map(() => false);
      }

      setLastSelectedCategory(categoryIndex);

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

      setSelectedTags(selectedTags);

      if (selectedTags.length === 0) {
        onAllCheck();
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
