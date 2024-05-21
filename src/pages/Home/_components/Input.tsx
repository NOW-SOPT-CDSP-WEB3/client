import { useState } from 'react';
import styled from 'styled-components';

import IconSearch from '@/assets/svg/ic_search.svg?react';

interface InputProps {
  handleSearchWord: (keyword: string) => void;
}

function Input({ handleSearchWord }: InputProps) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyPress = () => {
    handleSearchWord(inputValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchWord(inputValue);
    }
  };
  return (
    <InputLayout>
      <InputBox
        placeholder='카드, 메뉴, 혜택을 검색해 보세요'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleEnterKey}
      />
      <IconSearch onClick={handleKeyPress} />
    </InputLayout>
  );
}

const InputLayout = styled.div`
  display: flex;
  gap: 41.7rem;
  align-items: center;

  width: 68.5rem;
  height: 4.8rem;
  margin: 4.5rem 0;
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
