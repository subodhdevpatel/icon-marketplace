import styled from 'styled-components'

const CardWrapper = styled.div`
    width: 390px;
    height: 390px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background:blue;

    :hover {
        background: #F7F7F7;
    }
`

const HeartIconWrapper = styled.div`
    position: absolute;
    top: 24px;
    right: 28px;
`

const ImageWrapper = styled.div`
    height: 320px;
    width: 320px;
    margin: 24px 0 0;
`

const ImageTitle = styled.p`
    margin-top: 7px;
    font-family: Poppins, regular;
    font-size: 15px;
    color: #919191;
`

const Styles = {
    CardWrapper,
    HeartIconWrapper,
    ImageWrapper,
    ImageTitle
}

export default Styles