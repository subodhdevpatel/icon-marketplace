import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    position: relative;
    padding: 50px 60px;
    flex-direction: row;
    @media (min-width: 1600px) {
        padding: 95px 140px;
        flex-direction: row;

    }
    @media screen and (max-width: 1366px) {
        padding: 50px 60px;
        flex-direction: column;
    }
    @media screen and (max-width: 1199px) {
        padding: 50px 60px;
        flex-direction: column;
    }
    @media screen and (max-width: 991px) {
        width: 100%;
        padding: 50px 24px;
        }
`

const WrapperLeft = styled.div`
   width: calc(100% - 376px);
   @media (max-width: 1365px){
    width: 100%;
   }
`

const WrapperRight = styled.div`
    max-width: 376px;
    min-width: 376px;
    display: flex;
    flex-direction:column;
    gap:20px;
    position: sticky;
    top: 0;
    z-index: 9;

    @media (max-width: 1199px) {
     max-width: 100%;
     margin-top: 24px;
     width: 100%;
    }
    @media (max-width: 991px) {
        min-width: unset;
    }
`

const WrapperLeftTop = styled.div`
    margin-bottom: 42px;
    display: flex;
    @media (max-width: 1199px) {
      flex-direction: column;
    }
`

const WrapperLeftBottom = styled.div`
    display: flex;
    gap: 37px;
    padding-right:32px;
    box-sizing: border-box;
    @media (max-width: 767px) {
        flex-direction: column;
        padding-right: 0;
    }
`


const ImageWrapper = styled.div`
    width: 390px;
    height: auto;
    @media screen and (min-width: 1600px) {
        width: 590px;
    }
    @media screen and (max-width: 767px) {
        width: 100%;
    }
`

const DownloadWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #000000 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 24px;
    font: normal normal 600 20px/26px;
    color: #FFFFFF;
    gap: 16px;
    span {
     font: normal normal 600 11px/26px ;
    color: #FFFFFF;
    }

`

const DownloadText = styled.span`

`

const IconWrapper = styled.div`
     display: flex;
    align-items: center;
    gap:20px;
    margin-bottom: 40px;
    @media (max-width: 991px) {
        gap: 15px;
        margin-bottom: 24px;
    }
`

const ImgWrap = styled.div`
    display: flex;
    gap: 10px;
`
const SvgContent = styled.span`
    background: #FFE414;
    border-radius: 4px;
    font-size: 11px;
    line-height: normal;
    color: #000;
    font-weight: bold;
    padding: 4px 12px;
`
const PngContent = styled.span`
    background: #A9D3A0;
    border-radius: 4px;
    font-size: 11px;
    line-height: normal;
    color: #000;
    font-weight: bold;
    padding: 4px 12px;

`
const ContentWrapper = styled.div`
    flex: 1;
    @media (max-width: 1024px) {
        order: 1;
    }
`
const VectorText = styled.div`
   display: flex;
   font-size: 14px;
   font-weight: 400;
   color: #000;
`
const FlatText = styled.div`
    display: flex;
   font-size: 14px;
   font-weight: 400;
   color: #000;
`
const HeaderText = styled.h2`
    letter-spacing: 0.47px;
    color: #000000;
    font-size:50px;
    line-height: 69px;
    font-weight: bold;
    margin-bottom: 7px;
    @media screen and (max-width: 991px) {
        font-size:38px;
        line-height: 49px;
        margin-top: 24px;
    }
    @media screen and (max-width: 767px) {
        font-size:28px;
        line-height: 31px;
    }
`
const SubText = styled.h5`
    color: #000000;
    font-size:30px;
    line-height: 69px;
    font-weight: 600;
    @media screen and (max-width: 991px) {
        font-size:26px;
        line-height: 38px;
        margin-bottom: 7px;
    }
    @media screen and (max-width: 768px) {
        font-size:20px;
        line-height: 26px;
    }
`

const UltimateAccessWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #3C8CF3 0% 0% no-repeat padding-box;
    border-radius: 10px;
    color: #fff;
    padding: 24px;
    gap: 16px;
    font: normal normal 600 16px/21px Poppins;
    @media (max-width: 767px) {
        font: normal normal 600 14px/21px Poppins;
    }
`
const ContentDesc = styled.h4`
   color: #000000;
    font-size:20px;
    line-height: 29px;
    font-weight: 600;
    margin-bottom: 24px;
    @media (max-width: 767px) {
        font-size: 18px; line-height: 26px;
    }
`
const ParaContent = styled.p`
     color: #000000;
    font-size:16px;
    line-height: 21px;
    font-weight: 500;
    margin-bottom: 24px;
    @media (max-width: 767px) {
        font-size: 14px;
    }
`
const CompareWrapper = styled.div`
    background: #EAF5E7 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 24px;
`
const ServicerWrap = styled.div`
    background: #FFFAE5 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 24px;
    h5 {
        font: normal normal 600 20px/30px Poppins;
        color: #000000;
        margin-bottom: 16px;
    }
    p {
        font: normal normal medium 16px/22px Poppins;
        color: #000000;
        margin-bottom:21px;
    }
    span {
        font: italic normal medium 14px/22px Poppins;
        color: #000000;
    }
`

const ImageContent = styled.div`
    max-width: 390px;
    @media (min-width: 1600px) {
        max-width: 590px;
    }
    @media (max-width: 1199px) {
        order: 0;
        max-width: 100%;
        height: auto;
        width: 100%;
        margin: 0 auto;
    }
`

const IllustrationsCount = styled.div`
    font: normal normal bold 20px/16px Poppins;
    letter-spacing: 0.19px;
    color: #000000;
`

const GetIllustrationsCountWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 21px;
    margin-top: 12px;
    span {
        font-size: 16px;
        line-height: 16px;
        color: #000;
        font-weight: 500;
        text-decoration: none;
    }
     a {
        font-size: 16px;
        line-height: 16px;
        color: #000;
        font-weight: 500;
        text-decoration: underline;
     }
`
const CompatibleText = styled.div`
    h5 {
        font-size: 14px;
        letter-spacing: 0.13px;
        color: #7E7E7E;
        margin-bottom: 3px;
    }
     p {
        font: normal normal medium 14px/21px Poppins;
        color: #000000;
        margin-bottom: 25px;
        @media (max-width: 991px) {
            font-size: 13px;
            line-height: 18px;
            margin-bottom: 12px;
        }
     }
`

const commercialText = styled.div`
    display: flex;
     span {
        font-size: 11px;
        line-height:21px;
        color: #000000;
     }
     a {

        font-size: 11px;
        line-height:21px;
        color: #000000;
        font-style: italic;
        text-decoration: underline;
     }
`
const BtnWrap = styled.button`
    background: #FFD00F 0% 0% no-repeat padding-box;
    border-radius: 10px;
    font: normal normal bold 17px Poppins;
    color: #000000;
    width: 100%;
    line-height: 70px;
    margin-top: 25px;
`

const Styles = {
    Wrapper,
    WrapperLeft,
    commercialText,
    WrapperLeftTop,
    WrapperLeftBottom,
    WrapperRight,
    ImageWrapper,
    DownloadWrapper,
    DownloadText,
    UltimateAccessWrapper,
    ContentWrapper,
    IconWrapper,
    ImgWrap,
    SvgContent,
    HeaderText,
    VectorText,
    FlatText,
    ContentDesc,
    ParaContent,
    PngContent,
    CompareWrapper,
    ServicerWrap,
    SubText,
    ImageContent,
    IllustrationsCount,
    CompatibleText,
    BtnWrap,
    GetIllustrationsCountWrapper
}

export default Styles