"use client"

import styles from '../page.module.css'
import BeforeLoginComp from '../_component/BeforeLoginComp'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession();
  return (
    <main className={styles.main}>
     <h1>write now</h1>
      <BeforeLoginComp />
    </main>
  )
}
