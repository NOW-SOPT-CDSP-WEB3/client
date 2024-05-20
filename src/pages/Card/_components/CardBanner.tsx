import styled from 'styled-components';

import BannerImg from '@/assets/svg/banner.svg?react';
import Bannericon from '@/assets/svg/ic_banner_down.svg?react';

function CardBanner() {
  return (
    <CardBannerLayout>
      <BannerImg />
      <CardBannerInfoBox>
        <CardBannerInfoTitle>동영상 안내 정보</CardBannerInfoTitle>
        <Bannericon />
      </CardBannerInfoBox>
    </CardBannerLayout>
  );
}

export default CardBanner;

const CardBannerLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 9.2rem;
  padding-bottom: 3.2rem;
`;

const CardBannerInfoTitle = styled.p`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  color: ${({ theme }) => theme.COLORS.HD_BLK};
  font-size: ${({ theme }) => theme.FONT_SIZE.BODY_03_BOLD};

  margin-left: 0.4rem;
`;

const CardBannerInfoBox = styled.div`
  display: flex;
  align-items: center;
`;
