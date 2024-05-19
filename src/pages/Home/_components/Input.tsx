import styled from 'styled-components';

import IconSearch from '@/assets/svg/ic_search.svg?react';

function Input() {
  return (
    <InputLayout>
      <InputBox></InputBox>
      <IconSearch />
    </InputLayout>
  );
}

const InputLayout = styled.div`
  display: flex;
  gap: 41.7rem;
  align-items: center;

  width: 68.5rem;
  height: 4.8rem;
  padding: 1.2rem 2rem;
  border: 1px solid ${({ theme }) => theme.COLORS.HD_GRAY_01};
  border-radius: 12px;
`;

const InputBox = styled.input`
  width: 20rem;
  height: 1.9rem;
  border: none;

  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  outline: none;
`;
export default Input;
