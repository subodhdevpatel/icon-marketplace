import styled from "styled-components";

const Wrapper = styled.nav`
    width: 1600px;
    height: 113px;
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 20px;
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
        width: 768px;
    }
`

const LogoContainer = styled.div`
    max-width: 191px;
    img {
        max-width: 100%;
        height: auto;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;

`;

const NavItem = styled.div`
    font: normal normal normal 14px/26px Poppins;
    color: #000000;
    letter-spacing: 0.09px;
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
`;

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
    padding: 11px 16px;
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
`

const Styles = {
    Wrapper,
    LogoContainer,
    LinksContainer,
    NavItem,
    SearchInput,
    SearchBar,
    ContentWrapper,
    SignInButton
}

export default Styles