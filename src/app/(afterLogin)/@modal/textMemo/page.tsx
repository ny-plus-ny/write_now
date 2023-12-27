"use client"

import FirebaseCrud from "@/app/_component/firebaseCrud/firebaseCrud"
import Image from "next/image";
import { useRouter } from "next/navigation"
import styled from "styled-components"
import iconClosed from "../../../../../public/images/icon_close.png"
import { useState } from "react";

export default function Modal() {
    let [isChangedColor, setIsChangedColor] = useState(null);

    const router = useRouter(); 
    const onClickClose = () => {
        router.back();
    }

    const changeColor = (e) => {
        const changedColor : string=  e.target.className.split("__")[1].split("-")[0] === "Pink" ? "pink" : "skyblue"
        setIsChangedColor(changedColor)
        console.log(changedColor)
     }

    return (
        <ModalBackground>
            <Container>
                    <SelectSection backgroundColor={isChangedColor}>
                        <BtnWrap>
                        <ColorSelectBtn>
                            <Pink onClick={changeColor} />
                            <Blue onClick={changeColor} />
                        </ColorSelectBtn>
                            <CloseBtn onClick={onClickClose}>
                                <Image src={iconClosed} alt="iconClosed" width={20} height={18} />
                            </CloseBtn>
                        </BtnWrap>
                        <FirebaseCrud memotype ="text" color={isChangedColor}/>
                    </SelectSection>
            </Container>
        </ModalBackground>
    )
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
    /* background-color: rgba(0, 0, 0, 0.4); */
`


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const SelectSection = styled.div<{backgroundColor: string}>`
    padding: 20px 20px;
    top: 20%;
    position: relative;
    width: 500px;
    height: 450px;
    /* background-color: #f5f2f2; */

    background-color: ${(props)=> props.backgroundColor === "pink" ? "pink" : "skyblue" 
    };
    border-radius: 25px;
    box-shadow: 0 0 0 0.8px #cbcdcf;

`

const BtnWrap = styled.div`
    /* margin-right: 20px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`

const ColorSelectBtn = styled.button`
    width: 150px;
    height: 40px;
    all: unset;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    gap: 10px;
    `

const Pink = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: pink;
`

const Blue = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: skyblue;
`


const CloseBtn = styled.button`
    outline: none;
    all: unset;
    /* background-color: inherit ; */
    cursor: pointer;

`