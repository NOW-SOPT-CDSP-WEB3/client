import { useState } from 'react';
import styled from 'styled-components';

import CheckBox from '@/pages/Card/_components/CheckBox';

interface DropDownMenuProps {
  numberOfCheckboxes: number;
  checkboxesData: { title: string }[];
}

function DropDownMenu({ numberOfCheckboxes, checkboxesData }: DropDownMenuProps) {
  const [checkedStates, setCheckedStates] = useState(Array(numberOfCheckboxes).fill(false));

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedStates = checkedStates.map((item, idx) => (idx === index ? !item : item));
    setCheckedStates(updatedCheckedStates);
  };

  return (
    <DropDownMenuLayout>
      {checkedStates.map((checked, index) => (
        <DropDownMenuBox key={index}>
          <CheckBox checked={checked} onChange={() => handleCheckboxChange(index)} />
          <DropDownMenuSpan>{checkboxesData[index].title}</DropDownMenuSpan>
        </DropDownMenuBox>
      ))}
    </DropDownMenuLayout>
  );
}

export default DropDownMenu;

const DropDownMenuLayout = styled.div`
  width: 15rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  border-radius: 4px;
  margin-top: 0.6rem;
`;

const DropDownMenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.6rem;
  padding-left: 1.2rem;
`;

const DropDownMenuSpan = styled.span`
  margin-left: 0.6rem;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_03_BOLD};
  text-align: center;
`;
