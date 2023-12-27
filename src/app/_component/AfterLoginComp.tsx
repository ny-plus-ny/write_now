import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AfterLoginComp() {

    const {data: session} = useSession();

    return(
        <>
            <div>로그인 완료</div>
            <div>유저이름: {session?.user?.name}</div>
            <div>메모하러 가기</div>
            <Link href={"/textMemo"}>텍스트 메모</Link>
            <br />
            <Link href={"/micMemo"}>음성 메모</Link>
        </>

    )
}