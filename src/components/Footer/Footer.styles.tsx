import styled from "styled-components";

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 1600px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 90px 20px;
    justify-content: space-between;
    position: relative;

    @media screen and (max-width: 1024px) {
        width: 768px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        align-items: flex-start;
        padding: 50px 20px;
    }
`;

const Content = styled.div`
  display: flex;
  gap: 24px;
  @media screen and (max-width: 767px) {
        flex-direction: column;
    }
`;

const ContentContainer = styled.div`
  text-align: left;
`;

const ContentHeading = styled.p`
  color: #ffffff;
  font: normal normal bold 20px/35px Poppins;
  margin-bottom: 24px;
`;

const ContentLink = styled.div`
  color: #ededed;
  font: normal normal normal 18px/35px Poppins;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
`;

const Logo = styled.div`
  width: 78px;
  height: 78px;
  background: white;
  border-radius: 50%;
`;

const CopyrightText = styled.div`
  text-align: ritgh;
  font: normal normal normal 14px/35px;
  color: #ffffff;
  margin-top: 18px;
`;

const FooterLine = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  div {

    height: 10px;
    &:nth-of-type(1){
      flex:11;
    }
    &:nth-of-type(2){
      flex: 1;
    background: #483d90;
    }
    &:nth-of-type(3){
      flex: 2;
    background: #1f68fa;
    }
    &:nth-of-type(4){
      flex: 5;
    background: #fac124;
    }
    &:nth-of-type(5){
      flex: 3;
    background: #ef656c;
    }
  }
`
const Footer = styled.div`
 background: #000000;
 position: relative;
`

const Styles = {
  Wrapper,
  Content,
  ContentContainer,
  ContentHeading,
  ContentLink,
  LogoContainer,
  Logo,
  FooterLine,
  CopyrightText,
  Footer
};

export default Styles;
