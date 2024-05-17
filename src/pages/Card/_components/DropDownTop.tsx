import styled from 'styled-components';

import DropDownIcon from '@/assets/svg/ic_arrow_drop_down.svg?react';

interface DropDownTopProps {
  title: string;
  onClick: () => void;
}

function DropDownTop({ title, onClick }: DropDownTopProps) {
  return (
    <DropDownTopLayout onClick={onClick}>
      <DropDownTopTitle>{title}</DropDownTopTitle>
      <DropDownIcon />
    </DropDownTopLayout>
  );
}

export default DropDownTop;

const DropDownTopLayout = styled.div`
  width: 15rem;
  height: 2.6rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_04};
  display: flex;
`;

const DropDownTopTitle = styled.h1`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_GRAY_01};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;
