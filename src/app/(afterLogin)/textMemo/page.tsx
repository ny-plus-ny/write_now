"use client"

import FirebaseCrud from '@/app/_component/firebaseCrud/firebaseCrud'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styled from 'styled-components'

export default function Page() {
  const [isRecorded, setIsRecorded] = useState(Boolean);
  const [isTexted, setIsTexted] = useState(Boolean);

  const writing = () => {
    setIsTexted(true);
  }

  return (
    <Container>
      {/* memo page!!
      <RecBtn>녹음</RecBtn>
      <TextBtn>텍스트</TextBtn> */}
      {/* <FirebaseCrud /> */}
    </Container>
  )
}


const Container = styled.div`
`

const RecBtn = styled.button``

const TextBtn = styled.button``