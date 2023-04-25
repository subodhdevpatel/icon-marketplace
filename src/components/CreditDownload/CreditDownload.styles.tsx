import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    cursor: pointer;
    user-select: none;
`

const DownloadText = styled.div`
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    @media (max-width: 991px) {
        font-size: 14px;
        line-height: 22px;
    }
`

const DownloadOptions = styled.div`
    box-sizing: border-box;
    width: 100%;
    position: absolute;
    background: black;
    margin-top: 20px;
    border-radius: 6px;
    padding: 4px;
    z-index: 999;
`

const DownloadOption = styled.div`
    color: white;
    padding: 16px;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 991px) {
        font-size: 16px;
        line-height: 22px;
    }
`

const DownloadWrapper = styled.div`
    display: flex;
    align-items: center;
    background: #000000 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 24px;
    min-width: max-content;
    font: normal normal 600 20px/26px;
    color: #FFFFFF;
    gap: 16px;
    @media (max-width: 991px) {
        font-size: 18px;
        line-height: 22px;
    }
    span {
        font-size: 12px ;
        color: #FFFFFF;
        font-weight: bold;
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