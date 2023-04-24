import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import IllustrationDetailModal from 'components/IllustrationDetailModal/IllustrationDetailModal'
import { Banner } from 'sections/Illustrations/Banner/Banner'
import {SubscribeCredit} from 'components/SubscribeCredit/SubscribeCredit'
import { SameStyleIllustration } from 'sections/Illustrations/SameStyleIllustration/SameStyleIllustration'
import { Services } from 'sections/Illustrations/Services/Services'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <IllustrationDetailModal />
      <SubscribeCredit />
      <Services />
      <Footer />
    </div>
  )
}
