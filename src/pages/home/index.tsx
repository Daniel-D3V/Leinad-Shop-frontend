import { ButtonIcon } from '@/components/Header/Atoms/ButtonIcon';
import { Header } from '@/components/Header/Layout';
import { Apresentation } from './_sessions/Apresentation/Layout';
import { Categories } from './_sessions/Categories/Layout';

export default function Home() {
  return (
    <>
      <Header />
      <Apresentation />
      <Categories />
    </>
  )
}
