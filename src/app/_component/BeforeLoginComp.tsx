"use client"

import {signIn, useSession} from 'next-auth/react'
import styled from 'styled-components';

export default function BeforeLoginComp() {

    const {data: session} = useSession();

    return(
        <>
            <div>로그인 전 : 로그인을 해주세요</div>
            <button onClick={()=> signIn()}>로그인</button>
            <Title>로그인 전</Title>
        </>
    )
}

const Title = styled.div`
    
    height: 1000px
`
