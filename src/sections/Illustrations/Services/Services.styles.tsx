import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0 60px;
    width: 100%;
    @media screen and (min-width: 1600px) {
        padding: 0 140px;
    }
    @media (max-width: 991px) {
        padding: 0 24px;
        gap: 24px;
    }

`
const ServiceWrap = styled.div `
    background: #FAFAFA 0% 0% no-repeat padding-box;
    border-radius: 50px 0px;
    padding: 80px 62px;
    display: flex;
    @media (max-width: 1199px) {
        flex-direction: column;
    }
    @media screen and (max-width: 991px) {
        padding: 24px;
    }
    @media screen and (min-width: 1600px) {
        padding: 117px 62px;
  
    }
`
const ContentWrap = styled.div`
    


`

const DesignService = styled.div`
min-width: unset;
margin-bottom: 42px;
width: 100%;
        @media (max-width: 767px) {
            min-width: unset !important;
            margin-bottom: 24px;
            width: 100% !important;
        }
        @media screen and (max-width: 991px) {
            min-width: 430px;
            width: 430px;
            margin-bottom: 24px;
        }
        @media (min-width: 1600px) {
            width: 577px;
            min-width: 577px;
            h5 {
                font: normal normal 600 20px/42px Poppins;
                    letter-spacing: -0.13px;
                    color: #00CBD0; 
            }
            h2 {
                font: normal normal bold 68px/77px Poppins;
                letter-spacing: -1.36px;
                color: #000000;
                margin-bottom: 46px;
            }
            h4 {
                font: normal normal 600 48px/74px Poppins;
                letter-spacing: -0.96px;
                color: #000000;
            }
            p {
                font: normal normal normal 20px/28px Poppins;
                letter-spacing: -0.03px;
                color: #818181;
            }
        }
        h5 {
            font: normal normal 600 18px/32px Poppins;
                letter-spacing: -0.13px;
                color: #00CBD0; 
        }
        h2 {
            font: normal normal bold 36px/57px Poppins;
            letter-spacing: -1.36px;
            color: #000000;
            margin-bottom: 32px;
        }
        h4 {
            font: normal normal 600 32px/44px Poppins;
            letter-spacing: -0.96px;
            color: #000000;
        }
        p {
            font: normal normal normal 16px/28px Poppins;
            letter-spacing: -0.03px;
            color: #818181;
        }
        @media screen and (max-width: 991px) {
            h5 {
                font: normal normal 600 16px/18px Poppins;
                    letter-spacing: -0.13px;
                    color: #00CBD0; 
            }
            h2 {
                font: normal normal bold 24px/27px Poppins;
                letter-spacing: -1.36px;
                color: #000000;
                margin-top:10px;
                margin-bottom: 10px;
            }
            h4 {
                font: normal normal 600 26px/32px Poppins;
                letter-spacing: -0.96px;
                color: #000000;
            }
            p {
                font-size:14px;
                letter-spacing: -0.03px;
                color: #818181;
            }
        }

`

const BtnStorm = styled.button`
@media (min-width: 1600px) {
    padding: 26px 72px;
    margin-top: 36px;
}
@media (max-width: 991px) {
    padding: 16px 24px;
}
    background: #00CBD0 0% 0% no-repeat padding-box;
    border: 1px solid #FFFFFF;
    font: normal normal 600 21px/31px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    padding: 24px 42px;
    border-radius: 8px;
    margin-top: 28px;
`
const ServiveAds = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media screen and (max-width: 991px) {
        flex-direction: column;
        gap: 24px;
    }

`
const Testimonial = styled.div `
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`
const ServiceContainer = styled.div `
    display: flex; 
    @media screen and (max-width: 767px) {
        flex-direction: column;
        gap: 24px;
    }

    
`
const Quote = styled.div `
    background: #FFFAE3 0% 0% no-repeat padding-box;
    border-radius: 60px 60px 0px 60px;
    opacity: 0.9;
    padding: 32px 20px;
    font: normal normal medium 16px/29px Poppins;
    letter-spacing: 0px;
    color: #000000;
    width: 263px;
    margin-right: 25px;
    @media (min-width: 1600px) {
        padding: 46px 28px;
        width: 263px;
        margin-right: 42px;

    }
`

const UserInfo = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-right: 24px;
    img {
        position: absolute;
        top: -45px;
        right: -35px;
    }
    @media (min-width: 1199px) {
        img {
            margin: 0 auto;
        }
    }
    @media screen and (max-width: 991px) {
        padding-right: 0;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 12px;
        img {
            position: unset;
        }
    }
`   
const UserText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contnet: center;
    margin-top: 14px;   
    p {
        font-size: 11px;
        line-height: 15px;
        font-style: italic;
        letter-spacing: 0px;
        color: #000000;
        opacity: 0.66;
    }
`
const ServiceBox = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 32px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    text-align: center;
    border: 2px solid #E8E8E8;
    @media screen and (max-width: 767px) {
        min-width: unset;
        width: 100%;
        h5 {
            margin: 0 !important; 
        }
    }
    svg {
        width: 45px; 
        height: 45px;
    }
    h5 {
        font: normal normal 600 18px/24px Poppins;
        letter-spacing: -0.54px;
        color: #000000;
        margin-bottom: 14px;
        margin-top: 28px;
    }
    p {
        font: normal normal normal 14px/17px Poppins;
        letter-spacing: -0.03px;
        color: #000000;
    }
    @media (min-width: 1600px) {
        min-width: 242px;
        h5 {
            font: normal normal 600 27px/37px Poppins;
            letter-spacing: -0.54px;
            color: #000000;
            margin-bottom: 14px;
            margin-top: 28px;
        }
        p {
            font: normal normal normal 18px/27px Poppins;
            letter-spacing: -0.03px;
            color: #000000;
        }
    }
    &:first-child {
        border-radius: 30px 0px 0px 30px;
    }
    &:last-child {
        border-radius: 0px 30px 30px 0px;
    }
    @media screen and (max-width: 767px) {
        border-radius: 24px !important;
        gap: 24px;
        padding: 24px;
    }
`

const Styles = {
    Wrapper,
    ServiceWrap,
    DesignService,
    ContentWrap,
    ServiveAds,
    Testimonial,
    ServiceContainer,
    BtnStorm,
    ServiceBox,
    UserInfo,
    UserText,
    Quote
    
}

export default Styles;