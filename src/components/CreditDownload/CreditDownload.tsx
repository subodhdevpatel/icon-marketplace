import { useState, useCallback, useRef, MutableRefObject } from "react"

import Styles from "./CreditDownload.styles"
import { DownloadIcon, ArrowIcon } from 'assets/icons'
import { useOnClickOutside } from "hooks/useOnClickOutside";

// import Download

/**
 * Component - CreditDownload
 */
export const CreditDownload = () => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef() as MutableRefObject<HTMLDivElement>;

    const onClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    useOnClickOutside(ref, onClose)

    const handleClick = useCallback(
        () => {
            setIsOpen(prev => !prev)
        },
        []
    )


    return (
        <Styles.Wrapper ref={ref} onClick={handleClick}>
            <Styles.DownloadWrapper>
                <DownloadIcon />
                <Styles.DownloadText>
                    Download $65 / 40
                </Styles.DownloadText>
                <span>
                    Credits
                </span>
                <ArrowIcon stroke="white" />
            </Styles.DownloadWrapper>
            {isOpen && (
                <Styles.DownloadOptions>
                    <Styles.DownloadOption>Illustrations</Styles.DownloadOption>
                    <Styles.DownloadOption>Icons</Styles.DownloadOption>
                    <Styles.DownloadOption>Stickers</Styles.DownloadOption>
                </Styles.DownloadOptions>
            )}
        </Styles.Wrapper>
    )
}