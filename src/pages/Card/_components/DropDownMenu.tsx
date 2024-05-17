import { useState } from 'react';
import styled from 'styled-components';

import CheckBox from '@/pages/Card/_components/CheckBox';

interface DropDownMenuProps {
  numberOfCheckboxes: number;
}

function DropDownMenu({ numberOfCheckboxes }: DropDownMenuProps) {
  // 체크박스의 수에 따라 동적으로 초기 상태 배열 생성
  const [checkedStates, setCheckedStates] = useState(Array(numberOfCheckboxes).fill(false));

  const handleCheckboxChange = (index: number) => {
    const updatedCheckedStates = checkedStates.map((item, idx) => (idx === index ? !item : item));
    setCheckedStates(updatedCheckedStates);
  };

  return (
    <>
      {checkedStates.map((checked, index) => (
        <CheckBox key={index} checked={checked} onChange={() => handleCheckboxChange(index)} />
      ))}
    </>
  );
}

export default DropDownMenu;
