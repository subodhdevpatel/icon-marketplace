import { ReactNode } from "react"

export type SelectType = {
    options: OptionsType[],
    handleSelect: (id: string) => void,
    showIcon?: boolean
}

type OptionsType = {
    id: string,
    name: string,
    icon: ReactNode
}