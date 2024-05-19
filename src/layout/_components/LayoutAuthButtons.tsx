import styled from 'styled-components';

import { userLogin } from '@/api/axios/Benefit/benefitAxios';

// 회원가입 UI가 없어서, 로그인 아이디는 하나로 고정
const loginData = {
  email: 'test@gmail.com',
  password: 'test',
};

function LayoutAuthButtons() {
  const handleLoginClick = () => {
    userLogin(loginData);
  };

  return (
    <LoginBox>
      <SignUpButton>회원가입</SignUpButton>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
    </LoginBox>
  );
}

export default LayoutAuthButtons;

const HeaderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.6rem;
  height: 2.4rem;
  padding: 0 0.1rem;
  border: 0;
  border-radius: 5px;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const LoginButton = styled(HeaderButton)`
  background-color: ${({ theme }) => theme.COLORS.HD_BLK};

  color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;
const SignUpButton = styled(HeaderButton)`
  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_04};

  color: ${({ theme }) => theme.COLORS.HD_BLK};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.HD_GRAY_03};
  }
`;

const LoginBox = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;
