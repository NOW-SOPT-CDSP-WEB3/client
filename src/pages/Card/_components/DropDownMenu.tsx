import React from 'react';
import styled from 'styled-components';

import CheckBox from '@/pages/Card/_components/CheckBox';

interface DropDownMenuProps {
  checkboxesData: { title: string }[];
  checkedStates: boolean[];
  handleCheckboxChange: (index: number) => void;
}

function DropDownMenu({ checkboxesData, checkedStates, handleCheckboxChange }: DropDownMenuProps) {
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
  margin-top: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  border-radius: 4px;
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
