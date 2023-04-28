import Image from 'next/image'
import { useState, useCallback, useRef, MutableRefObject } from 'react'
import { useRouter } from 'next/router'
import { Select } from "components/Select/Select"
import {MobileHeader} from './MobileHeader'
import {useWindowSize} from 'usehooks-ts'
import { useOnClickOutside } from "hooks/useOnClickOutside"
import { AssetLibraryOptions } from './data'
import Logo from 'assets/images/Logo.png'
import { SearchIcon, AssetsLib } from 'assets/icons'
import Styles from "./Header.styles"

/**
 * Component - Header
 */
export const Header = () => {
    const size = useWindowSize()
    const isMobile = size.width <= 991;
    const router = useRouter()
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    const onClose = useCallback(() => {
        setIsSearchOpen(false)
    }, [])

    useOnClickOutside(ref, onClose)

    const handleSearchClick = useCallback(
        () => {
            setIsSearchOpen(prev => !prev)
        },
        []
    )

    return (
        <Styles.Wrapper ref={ref}>
            <Styles.ContentWrapper>
                <Styles.LogoContainer>
                    <Image src={Logo} alt="" onClick={() => router.push('/')} />
                </Styles.LogoContainer>
                {isMobile && <MobileHeader />}
                {isSearchOpen && !isMobile && (
                    <Styles.SearchBar>
                        <Styles.SearchInput type="text" placeholder="Search" />
                        <Styles.NavItem>
                            <Select
                                options={AssetLibraryOptions}
                                handleSelect={() => { }}
                                showIcon={false}
                            />
                            <SearchIcon />
                        </Styles.NavItem>
                    </Styles.SearchBar>
                )}
            </Styles.ContentWrapper>

            {!isMobile && <Styles.LinksContainer>
                <Styles.NavItem onClick={handleSearchClick}>
                    <SearchIcon /> Search
                </Styles.NavItem>
                <Styles.NavItem>
                    <AssetsLib />
                    <Select
                        options={AssetLibraryOptions}
                        handleSelect={() => { }}
                    />
                </Styles.NavItem>
                <Styles.NavItem> Custom design</Styles.NavItem>
                <Styles.NavItem>Updates</Styles.NavItem>
                <Styles.SignInButton>Sign in</Styles.SignInButton>
            </Styles.LinksContainer>}
        </Styles.Wrapper >
    )
}