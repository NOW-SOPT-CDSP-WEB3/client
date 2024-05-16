import styled from 'styled-components';

import UpIcon from '@/assets/svg/ic_up.svg?react';
import Logo1 from '@/assets/svg/img_footer_logo_01.svg?react';
import Logo2 from '@/assets/svg/img_footer_logo_02.svg?react';

import { MAIN_ROUTES } from '@/constants/routes';

import { COMPANY_INFO_LINKS, ETC_LINKS, LEGAL_CONTENTS, PHONE_NUMBERS } from '../_constants/footer';

interface ILayoutFooter {
  pathname: string;
}

function LayoutFooter({ pathname }: ILayoutFooter) {
  return (
    <Footer>
      <FooterContentBox>
        <FooterPhoneSection>
          <FooterBetweenBox>
            <FooterTitle>{PHONE_NUMBERS.CUSTOMER_SERVICE.TITLE}</FooterTitle>
            <FooterParagraph>{PHONE_NUMBERS.CUSTOMER_SERVICE.PHONE_NUMBER}</FooterParagraph>
          </FooterBetweenBox>
          <FooterInfoBox>
            <FooterInfoParagraph>외국인(Foreigner)·청각장애인을 위한</FooterInfoParagraph>
            <FooterInfoParagraph>상담 안내 서비스를 제공합니다.</FooterInfoParagraph>
          </FooterInfoBox>
          <FooterColBox>
            <FooterBetweenBox>
              <FooterTitle>{PHONE_NUMBERS.LOSS_REPORT.TITLE}</FooterTitle>
              <FooterParagraph>{PHONE_NUMBERS.LOSS_REPORT.PHONE_NUMBER}</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>{PHONE_NUMBERS.CARD_APPLICATION.TITLE}</FooterTitle>
              <FooterParagraph>{PHONE_NUMBERS.CARD_APPLICATION.PHONE_NUMBER}</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>{PHONE_NUMBERS.FINANCIAL_APPLICATION.TITLE}</FooterTitle>
              <FooterParagraph>{PHONE_NUMBERS.FINANCIAL_APPLICATION.PHONE_NUMBER}</FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>{PHONE_NUMBERS.BRAILLE_CARD_APPLICATION.TITLE}</FooterTitle>
              <FooterParagraph>
                {PHONE_NUMBERS.BRAILLE_CARD_APPLICATION.PHONE_NUMBER}
              </FooterParagraph>
            </FooterBetweenBox>
            <FooterBetweenBox>
              <FooterTitle>{PHONE_NUMBERS.OVERSEAS.TITLE}</FooterTitle>
              <FooterBasicParagraph>{PHONE_NUMBERS.OVERSEAS.PHONE_NUMBER}</FooterBasicParagraph>
            </FooterBetweenBox>
          </FooterColBox>
        </FooterPhoneSection>
        <FooterCompanySection>
          <CompanyTitle>{COMPANY_INFO_LINKS.TITLE}</CompanyTitle>
          <FooterColBox>
            {COMPANY_INFO_LINKS.LINKS.map((link) => (
              <FooterBasicParagraph key={link}>{link}</FooterBasicParagraph>
            ))}
          </FooterColBox>
        </FooterCompanySection>
        <FooterEtcSection>
          <FooterColBox>
            {ETC_LINKS.map((link) => (
              <FooterBasicParagraph key={link}>{link}</FooterBasicParagraph>
            ))}
          </FooterColBox>
        </FooterEtcSection>
        <FooterLawSection>
          <FooterRowBox>
            {LEGAL_CONTENTS.LINKS.map((link) => (
              <FooterTitle key={link}>{link}</FooterTitle>
            ))}
          </FooterRowBox>
          <FooterLawContent>
            <FooterLawParagraph>{LEGAL_CONTENTS.ADDRESS}</FooterLawParagraph>
            <FooterLawParagraph>
              사업자 등록번호 {LEGAL_CONTENTS.REGISTRATION_NUMBER}
            </FooterLawParagraph>
            <FooterLawParagraph>© Hyundai Card Co., Ltd.</FooterLawParagraph>
          </FooterLawContent>
          <FooterLogoBox>
            <Logo1 />
            <Logo2 />
          </FooterLogoBox>
        </FooterLawSection>
      </FooterContentBox>
      {pathname === MAIN_ROUTES.CARD.path && (
        <AddInterestCardButton>
          <IntrestCardParagraph>관심 카드 비교하기</IntrestCardParagraph>
          <UpIcon />
        </AddInterestCardButton>
      )}
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
  margin-left: 82px;
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

const FooterBasicParagraph = styled(FooterParagraph)`
  margin: 0;
`;

const FooterInfoParagraph = styled(FooterParagraph)`
  margin: 0;

  color: ${({ theme }) => theme.COLORS.HD_GRAY_02};
  line-height: normal;
`;

const FooterColBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterRowBox = styled.div`
  display: flex;
  gap: 11px;
`;

const FooterBetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
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
