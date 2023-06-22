import { Navbar } from '@/components/Navbar/Layout';
import { Apresentation } from './_sessions/Apresentation/Layout';
import { Categories } from './_sessions/Categories/Layout';
import { FeaturedAds } from './_sessions/FeaturedAds/Layout';
import { Informations } from './_sessions/Informations/Layout';
import { Footer } from '@/components/Footer/Layout';

export default function Home() {
  return (
    <>
      <Navbar />
      <Apresentation />
      <Categories />
      <FeaturedAds />
      <Informations />
      <Footer />
    </>
  )
}
