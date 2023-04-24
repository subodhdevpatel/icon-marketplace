import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import IllustrationDetailModal from 'components/IllustrationDetailModal/IllustrationDetailModal'
import { Banner } from 'sections/Illustrations/Banner/Banner'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <IllustrationDetailModal />
      <Footer />
    </div>
  )
}
