import { FC } from 'react'
import Image from 'next/image'

import PlaceHolderImage from 'assets/images/placeHolderImage.png'
import { HeartIcon } from 'assets/icons'

import { CardType } from './Card.types'

import CardStyles from './Card.styles'

/**
 * Component - Card
 */
const Card: FC<CardType> = ({ name, image, isLiked, handleClick }) => {
    return (
        <CardStyles.CardWrapper>
            <CardStyles.HeartIconWrapper>
                <HeartIcon fill={isLiked ? "red" : undefined} />
            </CardStyles.HeartIconWrapper>
            <CardStyles.ImageWrapper>
                <Image src={PlaceHolderImage} alt={name} />
            </CardStyles.ImageWrapper>
            <CardStyles.ImageTitle>{name}</CardStyles.ImageTitle>
        </CardStyles.CardWrapper>
    )
}

export default Card