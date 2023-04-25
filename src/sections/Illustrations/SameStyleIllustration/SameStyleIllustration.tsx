import { useEffect, useState } from 'react'
import axios from 'axios'
import { SampleIllustrationCard } from 'components/SampleIllustrationCard/SampleIllustrationCard'
import Styles from './SameStyleIllustration.styles'

export const SameStyleIllustration = () => {
    const [illustrationSets, setIllustrationSets] = useState([])
    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API}/set/type/illustration/0/4`)
            if (response.data.sets.length > 0) {
                setIllustrationSets(response.data.sets)
            }
        }
        fetch()
    }, [])
    return (
        <Styles.Wrapper>
            <Styles.HeadingWrapper>Same style illustrations &gt; </Styles.HeadingWrapper>
            <Styles.CardWrapper>
                {illustrationSets.map(({ _id, name, items }) =>
                    <SampleIllustrationCard key={_id} title={name} count={items["length"]} imageUrl='' />
                )
                }
            </Styles.CardWrapper>
        </Styles.Wrapper>
    )
}