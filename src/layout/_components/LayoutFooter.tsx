import styled from 'styled-components';

import UpIcon from '@/assets/svg/ic_up.svg?react';
import Logo1 from '@/assets/svg/img_footer_logo_01.svg?react';
import Logo2 from '@/assets/svg/img_footer_logo_02.svg?react';

function LayoutFooter() {
  return (
    <Footer>
      <FooterContentBox>
        <FooterPhoneSection>
          <FooterBetweenBox>
            <FooterTitle>고객센터</FooterTitle>
            <FooterParagraph>1577-6000</FooterParagraph>
          </FooterBetweenBox>
          <FooterInfoBox>
            <FooterInfoParagraph>외국인(Foreigner)·청각장애인을 위한</FooterInfoParagraph>
            <FooterInfoParagraph>상담 안내 서비스를 제공합니다.</FooterInfoParagraph>
          </FooterInfoBox>
          <FooterColBox>
            <FooterBetweenBox>
              <FooterTitle>도난분실신고</FooterTitle>
              <FooterParagraph>1577-6200</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>카드신청</FooterTitle>
              <FooterParagraph>1577-0100</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>금융신청</FooterTitle>
              <FooterParagraph>1577-6100</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>점자카드신청</FooterTitle>
              <FooterParagraph>1577-5630</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>해외</FooterTitle>
              <FooterBasicParagraph>82-2-3015-9000</FooterBasicParagraph>
            </FooterBetweenBox>
          </FooterColBox>
        </FooterPhoneSection>
        <FooterCompanySection>
          <CompanyTitle>회사소개</CompanyTitle>
          <FooterColBox>
            <FooterBasicParagraph>회사소개(한글·ENG)</FooterBasicParagraph>
            <FooterBasicParagraph>영업점 안내</FooterBasicParagraph>
            <FooterBasicParagraph>개인정보 처리방침</FooterBasicParagraph>
            <FooterBasicParagraph>고객권리안내</FooterBasicParagraph>
            <FooterBasicParagraph>이용약관</FooterBasicParagraph>
            <FooterBasicParagraph>윤리경영</FooterBasicParagraph>
          </FooterColBox>
        </FooterCompanySection>
        <FooterEtcSection>
          <FooterColBox>
            <FooterBasicParagraph>업무위탁현황</FooterBasicParagraph>
            <FooterBasicParagraph>인재모집</FooterBasicParagraph>
            <FooterBasicParagraph>사이트맵</FooterBasicParagraph>
            <FooterBasicParagraph>현대카드 SNS·패밀리·그룹사</FooterBasicParagraph>
          </FooterColBox>
        </FooterEtcSection>
        <FooterLawSection>
          <FooterRowBox>
            <FooterTitle>개인</FooterTitle>
            <FooterTitle>개인사업자</FooterTitle>
            <FooterTitle>법인</FooterTitle>
            <FooterTitle>가맹점</FooterTitle>
          </FooterRowBox>
          <FooterLawContent>
            <FooterLawParagraph>서울시 영등포구 의사당대로 3 현대카드빌딩 1관</FooterLawParagraph>
            <FooterLawParagraph>사업자 등록번호 213-86-15419</FooterLawParagraph>
            <FooterLawParagraph>© Hyundai Card Co., Ltd.</FooterLawParagraph>
          </FooterLawContent>
          <FooterLogoBox>
            <Logo1 />
            <Logo2 />
          </FooterLogoBox>
        </FooterLawSection>
      </FooterContentBox>
      <AddInterestCardButton>
        <IntrestCardParagraph>관심 카드 비교하기</IntrestCardParagraph>
        <UpIcon />
      </AddInterestCardButton>
    </Footer>
  );
}

export default LayoutFooter;

const Footer = styled.footer`
  grid-template-columns: 1fr 1fr 1fr;

  display: grid;
  justify-content: center;

  height: 229px;
  border-top: 1px solid ${({ theme }) => theme.COLORS.HD_GRAY_02};

  color: ${({ theme }) => theme.COLORS.HD_BLK};
`;

const FooterContentBox = styled.div`
  display: flex;
  grid-column: 2;

  width: 888px;
  height: 150px;
  margin: 36.22px 0 42.78px;
`;

const FooterPhoneSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 164px;
`;

const FooterCompanySection = styled.section`
  width: 152px;
  margin-left: 78px;
`;

const FooterEtcSection = styled.section`
  margin-top: 22px;
`;

const FooterLawSection = styled.section`
  display: flex;
  flex-direction: column;

  margin-left: 121px;
`;

const FooterTitle = styled.h3`
  margin-right: auto;

  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_02_BOLD};
`;

const FooterParagraph = styled.p`
  margin-right: 25px;

  font-family: ${({ theme }) => theme.FONTS.DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_02_REG};
`;

const FooterColBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterBasicParagraph = styled(FooterParagraph)`
  margin: 0;
`;

const FooterRowBox = styled.div`
  display: flex;
  gap: 11px;
`;

const FooterBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterInfoParagraph = styled(FooterParagraph)`
  margin: 0;

  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  line-height: normal;
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;

  margin: 7px 0 23px;
`;

const CompanyTitle = styled(FooterTitle)`
  margin-bottom: 12px;
`;

const FooterLawContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 9px;
`;

const FooterLawParagraph = styled.p`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.DETAIL_02_MED};
  line-height: 14px;
`;

const FooterLogoBox = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;

  margin-top: 13.78px;
`;

const AddInterestCardButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 200px;
  height: 40px;
  margin-top: 173.42px;
  margin-left: 32.23px;
  padding: 8px 23px;
  border: 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.HD_WHITE};
  box-shadow: 1px 1px 3px 0 rgb(0 0 0 / 25%);
  grid-column: 3;
`;

const IntrestCardParagraph = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};
`;
