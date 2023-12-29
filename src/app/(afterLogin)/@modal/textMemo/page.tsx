'use client';

import FirebaseCrud from '@/app/_component/firebaseCrud/firebaseCrud';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import iconClosed from '../../../../../public/images/icon_close.png';
import { useState } from 'react';
import { colors } from '@/app/constants/colors';

export default function Modal() {
  let [isChangedColor, setIsChangedColor] = useState('');

  const router = useRouter();
  const onClickClose = () => {
    router.back();
  };

  const ColorBtn = ({ targetColor }: { targetColor: string }): JSX.Element => {
    return (
      <TargetBtn
        targetColor={targetColor}
        onClick={() => setIsChangedColor(targetColor)}
      ></TargetBtn>
    );
  };

  return (
    <ModalBackground>
      <Container>
        <SelectSection targetedColor={isChangedColor}>
          <BtnWrap>
            <ColorSelectBtn>
              <ColorBtn targetColor={colors.primary.pink} />
              <ColorBtn targetColor={colors.primary.blue} />
            </ColorSelectBtn>
            <CloseBtn onClick={onClickClose}>
              <Image src={iconClosed} alt="iconClosed" width={20} height={18} />
            </CloseBtn>
          </BtnWrap>
          <FirebaseCrud memotype="text" color={isChangedColor} />
        </SelectSection>
      </Container>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectSection = styled.div<{ targetedColor: string }>`
  padding: 20px 20px;
  top: 20%;
  position: relative;
  width: 500px;
  height: 450px;
  background-color: ${props =>
    props.targetedColor ? props.targetedColor : colors.primary.beige};
  border-radius: 10px;
  box-shadow: 0 0 0 0.8px #cbcdcf;
`;

const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ColorSelectBtn = styled.button`
  width: 150px;
  height: 40px;
  all: unset;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 10px;
`;

const TargetBtn = styled.button<{ targetColor: string }>`
  all: unset;
  width: 30px;
  height: 30px;
  border: 2px solid #cbbec0;
  border-radius: 30px;
  background-color: ${props => props.targetColor && props.targetColor};
`;

const CloseBtn = styled.button`
  outline: none;
  all: unset;
  cursor: pointer;
`;
