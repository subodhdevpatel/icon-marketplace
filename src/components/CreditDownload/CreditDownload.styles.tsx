import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
    user-select: none;
`

const DownloadText = styled.span`

`

const DownloadOptions = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    background: black;
    margin-top: 20px;
    border-radius: 6px;
    padding: 4px;
`

const DownloadOption = styled.div`
    color: white;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
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

const Styles = {
    Wrapper,
    DownloadWrapper,
    DownloadText,
    DownloadOptions,
    DownloadOption
}

export default Styles;