import styled from 'styled-components';

import DropDownMenu from '@/pages/Card/_components/DropDownMenu';
import DropDownTop from '@/pages/Card/_components/DropDownTop';

type Category = {
  categoryName: string;
  checkboxes: Array<{ title: string }>;
};

type DropDownBoxProps = {
  checkBoxData: Category[];
  activeCategories: boolean[];
  onCategoryClick: (index: number) => void;
  checkboxStates: boolean[][];
  onCheckboxChange: (categoryIndex: number, checkboxIndex: number) => void;
};

function DropDownBox({
  checkBoxData,
  activeCategories,
  onCategoryClick,
  checkboxStates,
  onCheckboxChange,
}: DropDownBoxProps) {
  return (
    <DropDownBoxLayout>
      {checkBoxData.map((category, categoryIndex) => (
        <CategoryItem key={category.categoryName}>
          <DropDownTop
            title={category.categoryName}
            onClick={() => onCategoryClick(categoryIndex)}
            isActive={activeCategories[categoryIndex]}
          />
          {activeCategories[categoryIndex] && (
            <DropDownMenu
              checkboxesData={category.checkboxes}
              checkedStates={checkboxStates[categoryIndex]}
              handleCheckboxChange={(checkboxIndex) =>
                onCheckboxChange(categoryIndex, checkboxIndex)
              }
            />
          )}
        </CategoryItem>
      ))}
    </DropDownBoxLayout>
  );
}

export default DropDownBox;

const DropDownBoxLayout = styled.div`
  margin-top: 1.8rem;
`;

const CategoryItem = styled.div`
  margin-bottom: 1.8rem;
`;
