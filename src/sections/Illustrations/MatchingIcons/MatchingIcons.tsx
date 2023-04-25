import { useEffect, useState } from 'react'
import axios from 'axios'
import { IconsCard } from 'components/IconsCard/IconsCard'
import Styles from './MatchingIcons.styles'

export const MatchingIcons = () => {
    const [iconSets, setIconSets] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get("https://api.vectopus.com/api/set/type/icon/0/4")
            console.log('response', response)
            if (response.data.sets) {
                setIconSets(response.data.sets)
            }
        }
        fetch()
    }, [])
    return (
        <Styles.Wrapper>
        <Styles.HeadingWrapper>Icons to Match &gt; </Styles.HeadingWrapper>
         <Styles.CardIconWrap>
            {iconSets.map(({_id, name, liked, items}) => 
                <IconsCard id={_id} title={name} imageUrl='' count={items.length} isLiked={liked} />
            )}   
            </Styles.CardIconWrap>
        </Styles.Wrapper>
    )
}   