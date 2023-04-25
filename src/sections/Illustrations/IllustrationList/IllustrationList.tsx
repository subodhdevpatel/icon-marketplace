import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import Card from 'components/Card/Card'

import { CreditDownload } from 'components/CreditDownload/CreditDownload'
import { PremiumFreeSwitch } from 'components/PremiumFreeSwitch/PremiumFreeSwitch'

import { categories } from './Categories.data'

import Styles from './IllustrationList.styles'


export const IllustrationList = () => {
    const [illustrationsList, setIllustrationsList] = useState([])
    const [modalId, setModalId] = useState('')
    const [showMore, setShowMore] = useState(true)

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/illustration/siblings/63e277990dea9ad4cbdfb7d0/0/20`)
            if (response.data.illustrations.length > 0) {
                setIllustrationsList(response.data.illustrations)
            }
        }
        fetch()
    }, [])

    const handleCloseModal = useCallback(() => {
        setModalId('')
    }, [])

    return (
        <Styles.Wrapper>
            <Styles.TitleWrapper>
                <div className='flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between w-full items-end sm:items-center border-b border-black py-[15px] mr-0 sm:mr-[47px]  '>
                    <Styles.CategoryWrapper>
                        {categories.map(({ id, name }) => (
                            <Styles.Category key={`category-${id}`}>
                                {name}
                            </Styles.Category>
                        ))}
                        {showMore && <Styles.ShowMoreText>More...</Styles.ShowMoreText>}
                    </Styles.CategoryWrapper>
                    <PremiumFreeSwitch isFree handleChange={() => { }} />
                </div>
                <CreditDownload />
            </Styles.TitleWrapper>
            <Styles.ContentWrapper>

                {illustrationsList?.map(({ name, _id, thumbnailName, liked, tags }) => {
                    return (
                        <Card
                            name={name}
                            id={_id}
                            key={_id}
                            image={thumbnailName}
                            isLiked={liked}
                            modalVisible={modalId === _id}
                            tags={tags}
                            handleClick={(id) => setModalId(id)}
                            handleCloseModal={handleCloseModal}
                            handleLiked={() => { }}
                        />
                    )
                })}

            </Styles.ContentWrapper>
        </Styles.Wrapper>
    )

}