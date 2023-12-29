"use client"

import {signIn, useSession} from 'next-auth/react'
import styled from 'styled-components';
import google from '../../../public/images/icon_googleLogin.png'
import Image from 'next/image';
import AfterLoginComp from './AfterLoginComp';

export default function BeforeLoginComp() {

    const {data: session} = useSession();

    return(
        <Container>

            {session?.user? 
                <AfterLoginComp /> :
                <>
                    <div>로그인 전 : 로그인을 해주세요</div>
                    <div>{session?.user?.email}</div>
                    <LoginBtn onClick={()=> signIn('google')}>
                        <Image src={google}  width={250} alt='googleLoginIcon' />
                    </LoginBtn>
                </>
            }
        </Container>
    )
}

const Container = styled.div`

`

const Title = styled.div`
    
    /* height: 1000px */
`

const LoginBtn = styled.button`
    all: unset;
    cursor: pointer;
`
