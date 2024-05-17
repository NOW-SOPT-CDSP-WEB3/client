import styled from 'styled-components';

import CheckBoxImg from '@/assets/svg/ic_check.svg?react';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

function CheckBox({ checked, onChange }: CheckboxProps) {
  return (
    <CheckboxLayout>
      <CheckBoxHidden type='checkbox' checked={checked} onChange={onChange} />
      <CheckBoxStyled checked={checked} onClick={onChange}>
        {checked && <CheckBoxImg />}
      </CheckBoxStyled>
    </CheckboxLayout>
  );
}

export default CheckBox;

const CheckboxLayout = styled.div`
  display: inline-block;
`;

const CheckBoxHidden = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckBoxStyled = styled.div<{ checked: boolean }>`
  width: 1rem;
  height: 1rem;
  border: 0.1rem solid
    ${({ theme, checked }) => (checked ? theme.COLORS.HD_GRAY_02 : theme.COLORS.HD_GRAY_03)};
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.checked ? props.theme.COLORS.HD_GRAY_02 : props.theme.COLORS.HD_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
`;
