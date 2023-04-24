import styled from "styled-components";

const Wrapper = styled.div`

    margin: 50px auto;
    border: 1px solid #E2E2E2;
    border-radius: 40px;
    display: flex;
`;

const PreviewWrapper = styled.div`
    width: 100%;
    padding: 0 140px;
`

const WrapperLeft = styled.div`
  display: flex;
  padding: 36px;
  flex: 1;

`;

const WrapperRight = styled.div`
  // flex:1;
  max-width: 373px;
  background: #DFF5DA 0% 0% no-repeat padding-box;
  mix-blend-mode: multiply;
  border-radius: 0px 40px 40px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0 32px;
  position: relative;
`;

const ImgWrapper = styled.div`
  flex: 1;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const BreadCrumb = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
   span {
    font: normal normal bold 13px/24px Poppins;
    letter-spacing: 0.12px;
    color: #818181;
   }
`;

const TitleWrapper = styled.h1`
    font: normal normal 600 30px/31px Poppins;
    letter-spacing: 0.28px;
    color: #000000;
    margin: 12px 0 27px;
`;

const DownloadOptions = styled.div`
        font: normal normal 600 16px/31px Poppins;
        letter-spacing: 0.15px;
        color: #000000;
        margin-bottom: 12px;
`;

const RadioGroup = styled.input``;

const Label = styled.label`
font: normal normal normal 16px/30px Poppins;
letter-spacing: 0.15px;
color: #000000;
display: flex;
align-items: center;
gap: 8px;
span {
  font: normal normal normal 16px/30px Poppins;
  letter-spacing: 0.15px;
  color: #919191;
}
`;

const Input = styled.input``;

const Button = styled.button`
    background: #000000 0% 0% no-repeat padding-box;
    font: normal normal 600 19px/29px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding: 11px;
    gap: 8px;
    width: 214px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 32px;
    `;

const Tags = styled.div``;

const Information = styled.div``;

const ButtonWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 30px; 
  display: flex;
  gap: 18px;  
 
`;

const FullScreenButton = styled.button``;

const CloseButton = styled.button``;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.div`
  font: normal normal bold 20px/26px Poppins;
  color: #000000;
  margin-bottom: 21px;
`;

const DescriptionText = styled.div`
  display: flex;
  align-items: center;
  font: normal normal normal 13px/22px Poppins;
  letter-spacing: 0.12px;
  color: #000000;
  margin-bottom: 10px;
  gap: 6px; 
`;

const UnlockAllButton = styled.button`
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 4px #00000014;
border-radius: 4px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 12px;
font: normal normal 600 19px/29px Poppins;
letter-spacing: 0px;
color: #000000;
gap:8px;
margin-top: 32px;
`;

const BreadCrumbContent = styled.div`
   position: relative;
`;

const HeartIcon = styled.div`
   position: absolute;
   right: 0;
   top: 0;
`;

const RadioWrap = styled.div `
   display: flex;
   align-items: center;
   input[type="number"] {
    width: 113px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DFDFDF;
    border-radius: 4px;
   }
`

const MainWrap = styled.div `
  display: flex;
  align-items: center;
`;


const Styles = {
  Wrapper,  
  WrapperLeft,
  WrapperRight,
  ImgWrapper,
  ContentWrapper,
  BreadCrumb,
  TitleWrapper,
  DownloadOptions,
  Input,
  Button,
  Tags,
  Information,
  ButtonWrapper,
  FullScreenButton,
  CloseButton,
  RadioGroup,
  Label,
  DescriptionWrapper,
  TitleText,
  DescriptionText,
  PreviewWrapper,
  HeartIcon,
  BreadCrumbContent,
  RadioWrap,
  MainWrap,
  UnlockAllButton
};

export default Styles;
