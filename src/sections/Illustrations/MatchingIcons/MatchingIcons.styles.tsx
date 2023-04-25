import styled from "styled-components";

const Wrapper = styled.div`
    padding: 80px 60px;
    background: #F4F4F4 0% 0% no-repeat padding-box;
    @media (min-width: 1600px) {
        padding: 130px 140px;
    }
    @media (max-width: 1199px) {
        padding: 50px 60px;
    }
    @media (max-width: 767px) {
        padding: 24px;
    }


`;
const HeadingWrapper = styled.div`

    font: normal normal bold 32px/41px Poppins;
    letter-spacing: -0.23px;
    color: #000000;
    margin-bottom: 41px;
    @media (min-width: 1600px) {
        font: normal normal bold 35px/71px Poppins;
        margin-bottom: 61px;
    }
    @media (max-width: 1199px) {
        font: normal normal bold 26px/32px Poppins;
        margin-bottom: 38px;
    }
    @media (max-width: 767px) {
        font: normal normal bold 24px/28px Poppins;
        margin-bottom: 24px;
    }
`;
const CardWrapper = styled.div``;

const CardIconWrap = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    @media (max-width: 991px) {
        gap: 24px;
    }
`;

const Styles = {
    Wrapper,
    HeadingWrapper,
    CardWrapper,
    CardIconWrap
}

export default Styles