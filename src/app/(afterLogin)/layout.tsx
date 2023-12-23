import NavBar from "../_component/NavBar"

export default function AfterLoginLayout({
    children,
    modal
  }: {
    children: React.ReactNode
    modal: React.ReactNode
  }){
    return(
        <>
            <NavBar />
            {children}
            {modal}
        </>
    )
}

