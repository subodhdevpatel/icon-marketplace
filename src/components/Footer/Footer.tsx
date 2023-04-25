import Styles from "./Footer.styles";
import Image from 'next/image'
import Footer_Logo from 'assets/images/Footer_Logo.png'
export const Footer = () => {
  return (
    <Styles.Footer>
      <Styles.FooterLine>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Styles.FooterLine>
      <Styles.Wrapper>
        <Styles.Content>
          <Styles.ContentContainer>
            <Styles.ContentHeading>MORE RESOURCES</Styles.ContentHeading>
            <Styles.ContentLink>Isometric Maps</Styles.ContentLink>
            <Styles.ContentLink>UI illustrations</Styles.ContentLink>
            <Styles.ContentLink>Get Illustrations</Styles.ContentLink>
            <Styles.ContentLink>Custom Designs</Styles.ContentLink>
            <Styles.ContentLink>Sticker Folio</Styles.ContentLink>
          </Styles.ContentContainer>
          <Styles.ContentContainer>
            <Styles.ContentHeading>HELP AND INFO</Styles.ContentHeading>
            <Styles.ContentLink>Frequently asked questions</Styles.ContentLink>
            <Styles.ContentLink>Standard license</Styles.ContentLink>
            <Styles.ContentLink>Extended license</Styles.ContentLink>
            <Styles.ContentLink>Privacy Policy</Styles.ContentLink>
            <Styles.ContentLink>Refund Policy</Styles.ContentLink>
          </Styles.ContentContainer>
          <Styles.ContentContainer>
            <Styles.ContentHeading>BE A PART OF IT</Styles.ContentHeading>
            <Styles.ContentLink>Contact us</Styles.ContentLink>
            <Styles.ContentLink>Affiliate Program</Styles.ContentLink>
            <Styles.ContentLink>Request Custom Icons</Styles.ContentLink>
            <Styles.ContentLink>Give us ideas</Styles.ContentLink>
          </Styles.ContentContainer>
        </Styles.Content>
        <Styles.LogoContainer>
          <Styles.Logo>
            <Image src={Footer_Logo} alt="" />
          </Styles.Logo>
          <Styles.CopyrightText>
            ©2023 All rights reserved Vectopus.com
          </Styles.CopyrightText>
        </Styles.LogoContainer>
      </Styles.Wrapper >
    </Styles.Footer>
  );
};
