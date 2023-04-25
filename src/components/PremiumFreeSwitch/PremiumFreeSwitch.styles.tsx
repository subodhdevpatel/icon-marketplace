import styled from "styled-components";

const Wrapper = styled.div`
    width: 106px;
    height: 34px;
    background: #DEEFDB;
    border-radius: 18px;
    display: flex;
    align-items: center;
    padding: 5px 11px 5px 17px;
    gap: 11px;
`

const SwitchWrapper = styled.div`
  display: flex;
  border-radius: 18px;
  background: #FFFFFF;
  position: relative;
  width: 33px;
  height: 18px;
`

const ActiveSwitch = styled.div`
    width: 17px;
    height: 18px;
    border-radius: 50%;
    background: #A9D3A0;
    position: absolute;
    top: 0;
    left: 0;
`

const SwitchText = styled.p`
    font: normal normal medium 16px/24px Poppins;
    letter-spacing: 0.15px;
    color: #000000;
`

const Styles = {
    Wrapper,
    SwitchWrapper,
    ActiveSwitch,
    SwitchText
}

export default Styles;