import { ButtonIcon } from '@/components/Header/Atoms/ButtonIcon';
import { Header } from '@/components/Header/Layout';
import { Apresentation } from './_sessions/Apresentation/Layout';
import { Categories } from './_sessions/Categories/Layout';
import { FeaturedAds } from './_sessions/FeaturedAds/Layout';
import { ListCardProduct } from '@/components/CardProductList/Layout';

export default function Home() {
  return (
    <>
      <Header />
      <Apresentation />
      <Categories />
      <FeaturedAds />
    </>
  )
}
