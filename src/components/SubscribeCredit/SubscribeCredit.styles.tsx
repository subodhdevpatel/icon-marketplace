import styled from "styled-components";

const Wrapper = styled.div`
padding: 70px 60px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
@media(min-width: 1600px) {
padding: 100px 140px;

}
@media screen and (max-width: 1199px) {
    padding: 40px 60px;
    flex-direction: column;
}
@media screen and (max-width: 991px) {
    padding: 24px;
    flex-direction: column;
}
`

const WrapperLeft = styled.div`
font: normal normal bold 128px/36px Poppins;
color: #F6F6F6;
    @media screen and (min-width: 1600px) {
     font: normal normal bold 218px/36px Poppins;
     color: #F6F6F6;
 }

 @media screen and (max-width: 991px) {
        font-size: 60px;
 }

`

const WrapperRight = styled.div`
    display: flex;
    flex:1;
    position: relative;
    justify-content: flex-end;
    @media screen and (max-width: 991px) {
        flex-direction: column;
        gap: 24px;
        margin-top: 24px;
    }
`

const AccessWrap =styled.div`
    display: flex;
    align-items: center;
    padding: 46px;
    flex: 1;
    justify-content: flex-end;
    
    @media screen and (max-width: 1199px) {
        padding: 24px;
    }   
      
    div {
        width: 100%;
        text-align: right;
        position: relative;
        &:before {
            position:absolute;
            bottom:8px;
            left: 0;
            content: '';
            height: 2px;
            width: calc(100% - 105px);
            background:#EBEBEB;
        }
        &:after {
            content: '>';
            position:absolute;
            right: 105px;
            color:#EBEBEB;
            font-size: 25px;
        }

    }
    h5 {
        position: relative;
        svg { 
            position: absolute;
            top: -35px;
            left: -35px;
        }
    }
`
const SubcribeWrap = styled.div `
    display: flex;
    background: #000000 0% 0% no-repeat padding-box;
    border-radius: 142px 50px 50px 142px;
    margin-left: 100px;
    padding: 46px;
    position: relative;
    @media screen and (max-width: 1199px) {
        padding: 24px;

    }
    @media screen and (max-width: 991px) {
        padding: 24px;
        margin-left: 0;
        
    }

`

const Styles = {
    Wrapper,
    WrapperLeft,
    AccessWrap,
    SubcribeWrap,
    WrapperRight
}

export default Styles