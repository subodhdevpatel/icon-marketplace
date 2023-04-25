import { PremiumFreeSwitchType } from './PremiumFreeSwitch.types'
import Styles from "./PremiumFreeSwitch.styles"
import { FC } from 'react'


/**
 * Components - PremiumFreeSwitch
 */
export const PremiumFreeSwitch: FC<PremiumFreeSwitchType> = ({ isFree }) => {
    return (
        <Styles.Wrapper>
            <Styles.SwitchText>Free</Styles.SwitchText>
            <Styles.SwitchWrapper>
                <Styles.ActiveSwitch>
                </Styles.ActiveSwitch>
            </Styles.SwitchWrapper>
        </Styles.Wrapper>
    )
}