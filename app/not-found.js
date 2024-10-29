import Link from "next/link"
export default function NotFound(){
    return(
        
        <>
        <div className="flex flex-col justify-center items-center w-full h-[90vh]">
            <p>Ci dispiace, la pagina che stai cercando non esiste</p>
            <Link href="/">vai all HOME</Link>
        </div>
        </>
    )
}