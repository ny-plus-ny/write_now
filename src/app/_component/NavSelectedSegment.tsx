import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation"
import memoEmpty from "../../../public/images/icon_memo_empty.png"
import memoFill from "../../../public/images/icon_memo_fill.png"
import bookmarkEmpty from "../../../public/images/icon_bookmark_empty.png"
import bookmarkFill from "../../../public/images/icon_bookmark_fill.png"
import styled from "styled-components";

export default function NavSelectedSegment(){
    const segment = useSelectedLayoutSegment();
    return(
        <>
                   { segment === 'memoList' ? 
                    <LiTagSelected>
                            <StyledLink href={"/memoList"}>
                                <Menu>
                                    <IconWrapper>
                                        <Image src={memoFill} width={30} height={30} alt="memoIcon"/>
                                    </IconWrapper>
                                    <TextWrapper>메모</TextWrapper>
                                </Menu>
                            </StyledLink>
                    </LiTagSelected>
                    :
                    <LiTag>
                    <StyledLink href={"/memoList"}>
                        <Menu>
                            <IconWrapper>
                                <Image src={memoEmpty} width={30} height={30} alt="memoIcon"/>
                            </IconWrapper>
                            <TextWrapper>메모</TextWrapper>
                        </Menu>
                    </StyledLink>
                </LiTag>
                    }

                    { segment === 'bookmark' ?             
                        <LiTagSelected>
                            <StyledLink  href={"/bookmark"}>
                                <Menu>
                                    <IconWrapper>
                                        <Image src={bookmarkFill} width={30} height={30} alt="bookmarkIcon"/>
                                    </IconWrapper>
                                    <TextWrapper>보관</TextWrapper>
                                </Menu>
                            </StyledLink>
                        </LiTagSelected>
                        :
                        <LiTag>
                        <StyledLink  href={"/bookmark"}>
                            <Menu>
                                <IconWrapper>
                                    <Image src={bookmarkEmpty} width={30} height={30} alt="bookmarkIcon"/>
                                </IconWrapper>
                                <TextWrapper>보관</TextWrapper>
                            </Menu>
                        </StyledLink>
                    </LiTag>
                    }
        </>
    )
}


const LiTag = styled.li`
    list-style-type: none;
    :hover {
        background-color: #f4f5de;
        border-top-right-radius: 30px;
        border-bottom-right-radius: 30px;
    }
`

const LiTagSelected = styled.li`
    background-color: #f2efe6;
    list-style-type: none;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
`

const StyledLink = styled(Link)`
    text-decoration-line: none;  
`

const Menu = styled.div`
    display: flex;
    padding: 10px 50px;
    align-items: center;
    gap: 20px;
`

const IconWrapper = styled.div``

const TextWrapper = styled.div`
    font-size: 20px;
    color: black;
`
