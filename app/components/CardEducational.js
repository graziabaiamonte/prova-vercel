export default function CardEducational ({titolo, testo}) {

  return (
      <>
      <div  className="w-[90vw] md:w-[80%] 2xl:w-[60%] border-4 border-yellowLight rounded-xl">
          {/* titolo */}
          <div className="  flex items-start justify-center ">
            <h2 className="fontPrimary uppercase -mt-[10%] px-4 bg-white text-yellowDark text-xl md:text-3xl w-[90%] md:w-[70%] text-center z-[100]">{titolo}</h2>
          </div>

          
          {/* dettagli */}
          <div className=" w-[100%]  border-none  flex flex-col p-8 sticky z-[100]">
            <div className="">
              <p className="text-center ">{testo}</p>
            </div>
            
          </div>
        </div>
      </>
  )
}