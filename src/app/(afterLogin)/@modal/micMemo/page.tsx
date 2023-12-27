"use client"

import FirebaseCrud from "@/app/_component/firebaseCrud/firebaseCrud"
import styled from "styled-components"

export default function Modal() {
    return (
        <ModalBackground>
            <Container>
                <SelectSection>
                    <BtnWrap>
                        <CloseBtn>X</CloseBtn>
                    </BtnWrap>
                    <FirebaseCrud />
                </SelectSection>
            </Container>
        </ModalBackground>
    )
}

const ModalBackground = styled.div`
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    `

const SelectSection = styled.div`
    position: relative;
    padding: 20px 20px;

    /* top: 20%; */
    width: 500px;
    height: 450px;
    background-color: #fcfccf;
    border-radius: 25px;
    box-shadow: 0 0 1px 10px #868E96;

`

const BtnWrap = styled.div`
    /* margin-right: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: end;
`

const CloseBtn = styled.button`
    border: 1px solid grey;
    outline: none;
    background-color: inherit ;
    cursor: pointer;
    border-radius: 8px;
`