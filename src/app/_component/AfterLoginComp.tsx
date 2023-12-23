import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AfterLoginComp() {

    const {data: session} = useSession();

    return(
        <>
            <div>로그인 완료</div>
            <div>{session?.user?.name}</div>
            <div>메모 방법을 선택해주세요</div>
            <Link href={"/textMemo"}>텍스트 메모</Link>
            <Link href={"/micMemo"}>음성 메모</Link>
        </>

    )
}