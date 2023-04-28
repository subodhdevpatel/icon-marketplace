import styled from 'styled-components'
import {CardWraperType} from './Card.types'

const Wrapper = styled.div``;


const HeartIconWrapper = styled.div`
    position: absolute;
    top: 24px;
    right: 28px;
    opacity: 0;
`

const CardWrapper = styled.div<CardWraperType>`
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background: ${({modalVisible})=> modalVisible ? 
    `#F7F7F7 0% 0% no-repeat padding-box; p{ opacity: 1}; ${HeartIconWrapper} {
            opacity: 1;
        }`: '#FFFFFF 0% 0% no-repeat padding-box'};
    mix-blend-mode: multiply;
    border: 1px solid #F2F0F0;
    border-radius: 10px;
    padding: 24px;
    width: 100%;
    :hover {
        background: #F7F7F7 0% 0% no-repeat padding-box;
        mix-blend-mode: multiply;
        p {
            opacity: 1;
        }
        ${HeartIconWrapper} {
            opacity: 1;
        }
    }
`

const ImageWrapper = styled.div`
   width: 100%;
   height: auto;
   margin: 24px 0 0;
    img {
        margin: 0 auto;
    }
`

const ImageTitle = styled.p`
    font: normal normal normal 15px/23px Poppins;
    letter-spacing: 0px;
    color: #919191;
    opacity: 0.25;
    text-align: center;
`

const Styles = {
    Wrapper,
    CardWrapper,
    HeartIconWrapper,
    ImageWrapper,
    ImageTitle
}

export default Styles