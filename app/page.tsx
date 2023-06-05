import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/component/navBar/page'
import OfFerBnr from '@/component/offerBanner/page'
import FetchCategory from '@/component/body/fetchapi/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar/>
      <OfFerBnr/>
      <FetchCategory/>
    </main>
  )
}
