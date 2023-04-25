import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import { Banner } from 'sections/Illustrations/Banner/Banner'
import { SubscribeCredit } from 'components/SubscribeCredit/SubscribeCredit'
import { Services } from 'sections/Illustrations/Services/Services'
import { MatchingIcons } from 'sections/Illustrations/MatchingIcons/MatchingIcons'
import { IllustrationList } from 'sections/Illustrations/IllustrationList/IllustrationList'
import { SameStyleIllustration } from 'sections/Illustrations/SameStyleIllustration/SameStyleIllustration'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <IllustrationList />
      <SubscribeCredit />
      <Services />
      <MatchingIcons />
      <SameStyleIllustration />
      <Footer />
    </div>
  )
}
