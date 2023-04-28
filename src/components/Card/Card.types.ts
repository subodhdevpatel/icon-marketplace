export type CardType = {
    name: string
    image: string
    id: string
    modalVisible: boolean
    tags: string[]
    handleClick: (id: string) => void
    handleCloseModal: () => void
    isLiked: boolean
    handleLiked: (id: string) => void
}

export type CardWraperType = {
    modalVisible: boolean
}