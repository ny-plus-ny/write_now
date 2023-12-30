'use client';

import React, { useMemo } from 'react';
import styled from 'styled-components';
import NavSelectedSegment from './NavSelectedSegment';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../../../public/images/icon_user.png';
import { signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  const session = useSession();
  const userEmail = useMemo(() => {
    return session.data?.user?.name;
  }, [session.data?.user]);

  return (
    <Container>
      <Wrapper>
        <LogoArea>
          <HomeBtn href={'/'}>write now</HomeBtn>
        </LogoArea>
        <MenuArea>
          <ul>
            <NavSelectedSegment />
          </ul>
        </MenuArea>
        <ProfileArea>
          {session.data?.user && (
            <>
              <Image src={profile} alt="iconProfile" width={30} height={30} />
              <div>{userEmail}</div>
            </>
          )}
          <LogoutBtn onClick={() => signOut()}>로그아웃</LogoutBtn>
        </ProfileArea>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  height: 100dvh;
  width: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  height: inherit;
  width: inherit;
  background-color: #f9f9f9;
`;

const LogoArea = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeBtn = styled(Link)`
  all: unset;
  text-decoration-line: none;
  cursor: pointer;
  font-size: 40px;
  font-size: 700;
`;

const MenuArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const ProfileArea = styled.div`
  margin-bottom: 50px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: center;
  gap: 10px;
`;

const LogoutBtn = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 18px;
`;
