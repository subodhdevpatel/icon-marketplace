import { SampleIllustrationCard } from 'components/SampleIllustrationCard/SampleIllustrationCard'
import Styles from './SameStyleIllustration.styles'

export const SameStyleIllustration = () => {
    return (
        <Styles.Wrapper>
        <Styles.HeadingWrapper>Same style illustrations</Styles.HeadingWrapper>
        <Styles.CardWrapper>
            <SampleIllustrationCard title='test' count={0} imageUrl='https://picsum.photos/200/300'/>
            <SampleIllustrationCard title='test' count={0} imageUrl='https://picsum.photos/200/300'/>
            <SampleIllustrationCard title='test' count={0} imageUrl='https://picsum.photos/200/300'/>
            <SampleIllustrationCard title='test' count={0} imageUrl='https://picsum.photos/200/300'/>
        </Styles.CardWrapper>
        </Styles.Wrapper>
    )
}   