import styled from 'styled-components';

import CheckBoxImg from '@/assets/svg/ic_check.svg?react';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  size?: string;
  imgSize?: string;
}

function CheckBox({ checked, onChange, size = '1rem', imgSize = '0.5rem' }: CheckboxProps) {
  return (
    <CheckboxLayout>
      <CheckBoxHidden type='checkbox' checked={checked} onChange={onChange} />
      <CheckBoxStyled checked={checked} onClick={onChange} size={size} imgSize={imgSize}>
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
const CheckBoxStyled = styled.div<{ checked: boolean; size: string; imgSize: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 0.1rem solid
    ${({ theme, checked }) => (checked ? theme.COLORS.HD_GRAY_02 : theme.COLORS.HD_GRAY_03)};
  border-radius: 2px;
  background-color: ${({ theme, checked }) =>
    checked ? theme.COLORS.HD_GRAY_02 : theme.COLORS.HD_WHITE};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: ${({ imgSize }) => imgSize};
    height: ${({ imgSize }) => imgSize};
  }
`;
