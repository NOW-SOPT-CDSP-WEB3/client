import styled from 'styled-components';

import DropDownIcon from '@/assets/svg/ic_arrow_drop_down.svg?react';

interface DropDownTopProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

function DropDownTop({ title, onClick, isActive }: DropDownTopProps) {
  // title을 조건에 따라 변경
  const getDisplayTitle = (title: string) => {
    switch (title) {
      case 'HYUNDAI_ORIGINALS':
        return 'Hyundai Originals';
      case 'CHAMPION_BRANDS':
        return 'Champion Brands';
      case 'AFFILIATE':
        return '제휴카드';
      case 'MY_BUSINESS':
        return 'My Business';
      default:
        return title;
    }
  };

  return (
    <DropDownTopLayout onClick={onClick} $isActive={isActive}>
      <DropDownTopTitle $isActive={isActive}>{getDisplayTitle(title)}</DropDownTopTitle>
      <StyledDropDownIcon isActive={isActive} />
    </DropDownTopLayout>
  );
}

export default DropDownTop;

const DropDownTopLayout = styled.div<{ $isActive: boolean }>`
  display: flex;
  align-items: center;
  position: relative;

  width: 15rem;
  height: 2.6rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.HD_GRAY_03};
  border-radius: 4px;

  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.HD_GRAY_04 : theme.COLORS.HD_WHITE};

  cursor: pointer;
`;

const DropDownTopTitle = styled.h1<{ $isActive: boolean }>`
  margin-left: 1.2rem;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme, $isActive }) => ($isActive ? theme.COLORS.HD_GRAY_01 : theme.COLORS.HD_BLK)};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const StyledDropDownIcon = styled(DropDownIcon)<{ isActive: boolean }>`
  position: absolute;
  right: 1.4rem;
  ${({ isActive }) => isActive && 'transform: rotate(180deg);'}
`;
