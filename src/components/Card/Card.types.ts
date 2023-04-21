export type CardType = {
    name: string
    image: string
    id: string
    handleClick: (id: string) => void
    isLiked: boolean
}