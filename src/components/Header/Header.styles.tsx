import styled from "styled-components";
import {LinkType} from './Header.types'

const Wrapper = styled.nav`
width: 100%;
padding: 0 60px;
    height: 113px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
    @media (min-width: 1600px) {
        padding: 0 140px;

    }
    @media screen and (max-width: 991px) {
        padding: 0 24px;
    }
`

const LogoContainer = styled.div`
    max-width: 191px;
    cursor: pointer;
    img {
        max-width: 100%;
        height: auto;
    }
`;

const MobileHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
`

const MobileButton = styled.div``;

const MobileLinksContainer = styled.div<LinkType>`
    position: absolute;
    width: calc(100% + 48px);
    height: 0;
    transition: height 0.3s ease-out;
    background: #fff;
    left: -24px;
    top: 50px;
    z-index: 99;
    box-shadow: 0 5px 5px -5px #333;
    overflow: hidden;
    ${({toggleMenu, toggleOn}) => toggleMenu && `
        height: ${toggleOn ? '350px': '210px'};
        transition: height 0.2s ease-in;
        overflow: auto;
    `}
    @keyframes change-height {
        0% {
            height: 0;
        }
        
        100% {
            height: 350px;
        }
        }
    `;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

`;

const ListData =styled.div`
    width: 100%;
`;

const NavItem = styled.div`
    font: normal normal normal 14px/26px Poppins;
    color: #000000;
    letter-spacing: 0.09px;
    display: flex;
    margin: 5px 0; 
    gap: 10px;
    line-height: 40px;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
  
    @media screen and (max-width: 991px) {
        padding: 0 24px;
        margin: 0;
        width: 100%;
        &:hover {
            background: #000000;
            color: #fff;
        }
    }
`;

const NavItemSelect = styled.div`
    display: flex;
    margin-top: 24px;
    flex-direction: column;
    align-items: flex-start;
    line-height: 40px;
    padding: 0 24px;
`


const SearchInput = styled.input`
`;

const SignInButton = styled.button`
    width: 88px;
    height: 45px;
    background: #000000;
    border-radius: 5px;
    color: white;
`
const SearchBar = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    border: 1px solid #E2E2E2;
    border-radius: 5px;
    width: 535px;
    background: #fff;
    padding: 0 16px;
    @media (max-width: 1440px) {
        width: 555px;
        padding: 0 16px;
        position: absolute;
        left: 114%;
        background: #fff;
        z-index:9;
    }
    input[type="text"] {
        border: none;
        &:focus {
            border: none;
            outline: none;
        }
    }
`
const ContentWrapper = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    position: relative;
    @media screen and (max-width: 991px) {
        justify-content: space-between;
        width: 100%;
        position: relative;
    }
`
const ToggleIcon = styled.div `
    width: 28px;
    height: 30px;
    margin: 10px auto;
`;
const ItemList = styled.div `
    width: 100%;
    height: 5px;
    background: #333;
    margin: 4px auto;
    transition: all 0.3s;
    backface-visibility: hidden;`;

const NavItemList = styled.div `
    padding: 0 24px; 
    &:hover {
        background: #000;
        color: #fff;
    }
`;


const Styles = {
    Wrapper,
    LogoContainer,
    MobileHeaderContainer,
    MobileButton,
    MobileLinksContainer,
    LinksContainer,
    NavItem,
    NavItemSelect,
    SearchInput,
    SearchBar,
    ListData,
    ContentWrapper,
    ToggleIcon,
    ItemList,
    NavItemList,
    SignInButton
}

export default Styles