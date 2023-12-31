'use client';

import FirebaseConfig from '@/app/_component/firebaseConfig/firebaseConfig';
import { ref, get } from 'firebase/database';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function MemoList() {
  const database = FirebaseConfig();
  const memoListRef = ref(database, 'Customer/' + 'test' + '/contents');

  const [isData, setIsData] = useState('');

  useEffect(() => {
    get(memoListRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setIsData(data);
      }
    });
  }, []);

  return (
    <Container>
      <div>내용 {isData}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
`;
