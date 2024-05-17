import { useState } from 'react';
import styled from 'styled-components';

import DropDownMenu from '@/pages/Card/_components/DropDownMenu';
import { CHECK_BOX_DATA } from '@/pages/Card/_constants/cardData';

import DropDownTop from './DropDownTop';

function DropDownBox() {
  // 각 카테고리의 메뉴 표시 상태를 배열로 관리
  const [activeCategories, setActiveCategories] = useState<boolean[]>(
    Array(CHECK_BOX_DATA.length).fill(false),
  );

  const handleDropDownClick = (index: number) => {
    // 클릭된 카테고리의 표시 상태를 토글
    setActiveCategories((prev) => prev.map((isActive, i) => (i === index ? !isActive : isActive)));
  };

  return (
    <DropDownBoxLayout>
      {CHECK_BOX_DATA.map((category, index) => (
        <div key={category.categoryName}>
          <DropDownTop title={category.categoryName} onClick={() => handleDropDownClick(index)} />
          {activeCategories[index] && (
            <DropDownMenu numberOfCheckboxes={category.checkboxes.length} />
          )}
        </div>
      ))}
    </DropDownBoxLayout>
  );
}

export default DropDownBox;

const DropDownBoxLayout = styled.div`
  margin-left: 3.6rem;
  margin-top: 6.8rem;
`;
