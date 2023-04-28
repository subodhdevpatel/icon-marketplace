import { useState } from 'react'
import {AssetsLib} from 'assets/icons'
import Styles from './Header.styles'

export const MobileHeader = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleOn, setToggleOn] = useState(false)
    return (
        <Styles.MobileHeaderContainer>
            <Styles.MobileButton onClick={() => setToggleMenu((prev) => !prev)}>
            <Styles.ToggleIcon>
                <Styles.ItemList></Styles.ItemList>
                <Styles.ItemList></Styles.ItemList>
                <Styles.ItemList></Styles.ItemList>
            </Styles.ToggleIcon>
           </Styles.MobileButton>
           <Styles.MobileLinksContainer toggleMenu={toggleMenu} toggleOn={toggleOn}>
               <Styles.NavItemSelect>
               <div className='flex gap-3 items-center' onClick={() => setToggleOn((prev) => !prev)}>
                   <AssetsLib /> Asset Library
                </div>
               {toggleOn && 
               <Styles.ListData onClick={(e) => e.stopPropagation()}>
               <Styles.NavItemList>Illustrations</Styles.NavItemList>
               <Styles.NavItemList>Icons</Styles.NavItemList>
               <Styles.NavItemList>Stickers</Styles.NavItemList>
               </Styles.ListData>}
               </Styles.NavItemSelect>
               <Styles.NavItem>
               Custom design
               </Styles.NavItem>
               <Styles.NavItem>Updates</Styles.NavItem>
               <Styles.NavItem>Sign in</Styles.NavItem>
           </Styles.MobileLinksContainer>
           </Styles.MobileHeaderContainer>
    )
}