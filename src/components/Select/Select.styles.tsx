import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
`

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Title = styled.p``

const OptionsWrapper = styled.div`
    position: absolute;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin-top: 10px;
    padding: 4px;
`

const Option = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    gap: 8px;
    padding: 3px 6px;
    &:hover {
        background: #f7f7f7;
    }
`

const Styles = {
    Wrapper,
    TitleWrapper,
    Title,
    OptionsWrapper,
    Option
}

export default Styles