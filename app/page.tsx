"use client";
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '@/component/navBar/page'
import OfFerBnr from '@/component/offerBanner/page'
import FetchCategory from '@/component/body/fetchapi/page'
import Cart from '@/component/body/cart/page'
import { useAppSelector } from '@/redux/hook'

export default function Home() {
  const demo = useAppSelector((state:any)=>{return state.arr.arr});
  // console.log("redux state");
  // console.log(demo.logInDetails[0]);

  let Userlogin = false
  if(demo.logInDetails[0]!=undefined){
     Userlogin = demo.logInDetails[0].loginStatus;
  }

 
  return (
    <main className={styles.main}>
      <NavBar UserStatus={Userlogin} />
      <OfFerBnr/>
      <FetchCategory/>
      <Cart/>
    </main>
  )
}
