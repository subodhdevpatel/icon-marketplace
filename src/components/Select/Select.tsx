import { FC, useCallback, useState, useRef, MutableRefObject } from "react"
import { ArrowIcon } from "assets/icons"
import { useOnClickOutside } from "hooks/useOnClickOutside"

import { SelectType } from "./Select.types"
import Styles from "./Select.styles"

/**
 * Component - Select
 */
export const Select: FC<SelectType> = ({ options, handleSelect, showIcon = true }) => {
    const [showOptions, setShowOptions] = useState<boolean>()
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    const onClose = useCallback(() => {
        setShowOptions(false)
    }, [])

    useOnClickOutside(ref, onClose)

    /**
     * Select the options from drop-down
     * @param {string} id
     */
    const onSelect = useCallback((id: string) => {
        handleSelect(id)
        setShowOptions(false)
    }, [])

    return (
        <Styles.Wrapper ref={ref}>
            <Styles.TitleWrapper onClick={() => setShowOptions((prev) => !prev)}>
                <Styles.Title>Asset Library</Styles.Title>
                <ArrowIcon stroke="black" />
            </Styles.TitleWrapper>
            {showOptions && <Styles.OptionsWrapper onMouseLeave={() => setShowOptions((true))}>
                {options.map(({ id, name, icon }) => (
                    <Styles.Option key={id} onClick={() => onSelect(id)}>
                        {showIcon && icon}
                        <p>{name}</p>
                    </Styles.Option>
                ))}
            </Styles.OptionsWrapper>}
        </Styles.Wrapper >
    )
}