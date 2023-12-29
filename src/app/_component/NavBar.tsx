'use client';

import React from 'react';
import styled from 'styled-components';
import NavSelectedSegment from './NavSelectedSegment';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function NavBar() {
  const segment = useSelectedLayoutSegment();
  console.log(segment);
  return (
    <Container>
      <Wrapper>
        <ul>
          <NavSelectedSegment />
        </ul>
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
  gap: 10px;
`;
