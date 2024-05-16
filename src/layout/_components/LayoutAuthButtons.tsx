import styled from 'styled-components';

function LayoutAuthButtons() {
  return (
    <LoginBox>
      <LoginButton>로그인</LoginButton>
      <SignUpButton>회원가입</SignUpButton>
    </LoginBox>
  );
}

export default LayoutAuthButtons;

const HeaderBottomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 24px;
  padding: 0 1px;
  border: 0;
  border-radius: 5px;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_01_BOLD};
`;

const LoginButton = styled(HeaderBottomButton)`
  background-color: ${({ theme }) => theme.COLORS.HD_BLK};

  color: ${({ theme }) => theme.COLORS.HD_WHITE};
`;
const SignUpButton = styled(HeaderBottomButton)`
  background-color: ${({ theme }) => theme.COLORS.HD_GRAY_04};

  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const LoginBox = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
