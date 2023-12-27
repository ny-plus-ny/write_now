"use client"

import styles from '../page.module.css'
import BeforeLoginComp from '../_component/BeforeLoginComp'
import { signOut, useSession } from 'next-auth/react'
import styled from 'styled-components';

export default function Home() {
  const session = useSession();
  return (
    <Main >
     <h1>write now</h1>
      <BeforeLoginComp />
    </Main>
  )
}


const Main = styled.main`
  display: flex;
  width: 100dvw;
  height: 100dvh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
