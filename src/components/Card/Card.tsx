import { FC, useCallback, MouseEvent } from 'react'
import Image from 'next/image'

import PlaceHolderImage from 'assets/images/PlaceHolderImage.png'
import { HeartIcon } from 'assets/icons'

import { CardType } from './Card.types'

import CardStyles from './Card.styles'
import { IllustrationDetailModal } from 'components/IllustrationDetailModal/IllustrationDetailModal'

/**
 * Component - Card
 */
const Card: FC<CardType> = ({ id, name, image, modalVisible, tags, isLiked, handleClick, handleCloseModal, handleLiked }) => {
    const handleLikedClick = useCallback((event: MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        handleLiked(id)
    }, [id])

    return (
        <>
            <CardStyles.CardWrapper modalVisible={modalVisible} onClick={() => handleClick(id)}>
                <CardStyles.HeartIconWrapper onClick={handleLikedClick}>
                    <HeartIcon fill={isLiked ? "red" : undefined} />
                </CardStyles.HeartIconWrapper>
                <CardStyles.ImageWrapper>
                    <Image src={PlaceHolderImage} alt={name} />
                </CardStyles.ImageWrapper>
                <CardStyles.ImageTitle>{name}</CardStyles.ImageTitle>
            </CardStyles.CardWrapper>
            {modalVisible && <IllustrationDetailModal name={name} isLiked={isLiked} tags={tags} handleCloseModal={handleCloseModal} />}
        </>
    )
}

export default Card