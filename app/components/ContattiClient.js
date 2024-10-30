"use client";
import {APIProvider, Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';

export default function Contatti() {
    const location = [
        {key: 'castiglione', location: { lat: 38.043860, lng: 12.543596}},
    ]

    return (
    <>
     <div className=" bg-yellowLight flex flex-col lg:flex-row relative">
                
                {/* MOBILE */}
                <div className='bg-yellowLight flex flex-col items-center justify-center lg:hidden mt-[25%]'>
                    {/* main testo */}
                    <div className='bg-white px-4 pb-4 w-[90vw] flex items-center flex-col rounded-lg'>
                        <div><h1  className="fontPrimary text-yellowDark -mt-[20px] md:-mt-[30px] text-[28px] md:text-5xl uppercase">Contatti</h1></div>
                        
                        <div className="flex flex-col lg:flex-row items-start justify-around w-full  mt-[5%]">
                        {/* sede */}
                            <div className="text">
                                <div className="border-b-2 mb-[5%] border-yellowDark w-[50px]">
                                    <h3 className="fontPrimary text-[20px]  md:text-2xl text-nowrap">SEDE E STABILIMENTO</h3>
                                </div>
                                <p>Contrada San Cusumano</p>
                                <p>91016 Erice (TP)</p>
                                <p>Tel +39 0923.562888</p>
                                <p>Fax +39 0923.562234</p>
                                <a href='mailto:info@ninocastiglione.it'>info@ninocastiglione.it</a>


                                {/* shop */}
                                <div className="mt-[20%] mb-[30%]">
                                    <div className="border-b-2 mb-[5%] border-yellowDark w-[50px]">
                                        <h3 className="fontPrimary text-[20px]  md:text-2xl text-nowrap">TUNA SHOP</h3>
                                    </div>
                                <a href="mailto:tunashop@ninocastiglione.it">tunashop@ninocastiglione.it</a>
                            </div>
                            </div>

                        {/* uffici */}
                            <div className="text break-words">
                                <div className="border-b-2 mb-[5%] border-yellowDark w-[50px]">
                                    <h3 className="fontPrimary text-[20px]  md:text-2xl text-nowrap">UFFICI COMMERCIALI</h3>
                                </div>
                                <p>Via E. Di Savoia, 5</p>
                                <p>04100 Latina</p>
                                <p>Tel +39 0773.692280</p>
                                <p>Fax +39 0773.474866</p>
                                <a className=' break-words whitespace-normal' href="mailto:commerciale@ninocastiglione.it">commerciale@ninocastiglione.it</a>
                            </div>

                        </div>
                    </div> 

                    {/* mappa */}
                    <div className="  w-full  flex-col justify-center items-center ">
                        <div  className="w-[100%] flex items-center map-container" >
                            {/* <APIProvider apiKey={"AIzaSyCFVOoVLY-mchBfwvpVcfiu8EZzCAFeVlc"}>
                                <Map
                                style={{width: '100vw', height: '45vh'}}
                                center={ {  lat: 38.323860, lng: 14.200} }
                                mapId='61d92cc516c958a3'
                                zoom={6}
                                // gestureHandling={'greedy'}
                                disableDefaultUI={true}
                                options={{
                                    zoomControl: false, 
                                    scrollwheel: false, 
                                    disableDoubleClickZoom: true, // Disable double-click zoom
                                    draggable: false, // Prevent dragging the map
                                    keyboardShortcuts: false, // Disable keyboard shortcuts for panning
                                }}
                                >
                                <PoiMarkers pois={location} />
                                </Map>
                            </APIProvider> */}
                        </div>
                    </div>
                </div>
                
                
                {/* MODALITà DESKTOP */}
                    {/* box sinistro */}
                    <div className='hidden lg:flex w-[40%]'></div>
                    
                     {/* mappa google per portatili */}
                     <div className="hidden lg:flex 2xl:hidden w-[75%]  flex-col justify-center items-center ">
                        <div  className="w-[100%] flex items-center map-container" >
                            {/* <APIProvider apiKey={"AIzaSyCFVOoVLY-mchBfwvpVcfiu8EZzCAFeVlc"}>
                                <Map
                                style={{width: '100vw', height: '170vh'}}
                                center={ {  lat: 39.043860, lng: 14.543596} }
                                mapId='61d92cc516c958a3'
                                zoom={8}
                                // gestureHandling={'greedy'}
                                disableDefaultUI={true}
                                options={{
                                    zoomControl: false, 
                                    scrollwheel: false, 
                                    disableDoubleClickZoom: true, // Disable double-click zoom
                                    draggable: false, // Prevent dragging the map
                                    keyboardShortcuts: false, // Disable keyboard shortcuts for panning
                                }}
                                >
                                <PoiMarkers pois={location} />
                                </Map>
                            </APIProvider> */}
                        </div>
                    </div>
                    
                    
                    {/* mappa google  per schermi large*/}
                    <div className="hidden 2xl:flex w-[60%]  flex-col justify-center items-center ">
                        <div  className="w-[100%] flex items-center map-container" >
                            {/* <APIProvider apiKey={"AIzaSyCFVOoVLY-mchBfwvpVcfiu8EZzCAFeVlc"}>
                                <Map
                                style={{width: '100vw', height: '120vh'}}
                                center={ {  lat: 39.043860, lng: 14.543596} }
                                mapId='61d92cc516c958a3'
                                zoom={8}
                                // gestureHandling={'greedy'}
                                disableDefaultUI={true}
                                options={{
                                    zoomControl: false, 
                                    scrollwheel: false, 
                                    disableDoubleClickZoom: true, // Disable double-click zoom
                                    draggable: false, // Prevent dragging the map
                                    keyboardShortcuts: false, // Disable keyboard shortcuts for panning
                                }}
                                >
                                <PoiMarkers pois={location} />
                                </Map>
                            </APIProvider> */}
                        </div>
                    </div>

                    {/* main testo */}
                    <div className='bg-white p-2 w-[40vw] md:w-[50vw] hidden lg:flex items-center flex-col absolute top-[20%] left-[10%] rounded-lg'>
                        <div><h1 className="fontPrimary text-yellowDark -mt-[20px] md:-mt-[30px] text-[28px] md:text-5xl uppercase">Contatti</h1></div>
                        
                        <div className="flex flex-col md:flex-row items-start justify-around w-full  mt-[5%]">
                        {/* sede */}
                            <div className="text">
                                <div className="border-b-2 mb-[5%] border-yellowDark w-[50px]">
                                    <h3 className="fontPrimary text-[20px]  md:text-2xl w-[90px] text-wrap">SEDE E STABILIMENTO</h3>
                                </div>
                                <p>Contrada San Cusumano</p>
                                <p>91016 Erice (TP)</p>
                                <p>Tel +39 0923.562888</p>
                                <p>Fax +39 0923.562234</p>
                                <a href='mailto:info@ninocastiglione.it'>info@ninocastiglione.it</a>


                                {/* shop */}
                                <div className="mt-[20%] mb-[30%]">
                                    <div className="border-b-2 mb-[5%] border-yellowDark w-[50px]">
                                        <h3 className="fontPrimary text-[20px]  md:text-2xl text-nowrap">TUNA SHOP</h3>
                                    </div>
                                <a href="mailto:tunashop@ninocastiglione.it">tunashop@ninocastiglione.it</a>
                            </div>
                            </div>

                        {/* uffici */}
                            <div className="text">
                                <div className="border-b-2 mb-[5%] border-yellowDark w-[50px]">
                                    <h3 className="fontPrimary text-[20px]  md:text-2xl text-wrap">UFFICI COMMERCIALI</h3>
                                </div>
                                <p>Via E. Di Savoia, 5</p>
                                <p>04100 Latina</p>
                                <p>Tel +39 0773.692280</p>
                                <p>Fax +39 0773.474866</p>
                                <a href="mailto:commerciale@ninocastiglione.it">commerciale@ninocastiglione.it</a>
                            </div>

                        </div>
                    </div>  

            </div>
    </>
    )
}

// const PoiMarkers = (props) => {
//     return (
//       <>
//         {props.pois.map( (poi) => (
//           <AdvancedMarker
//             key={poi.key}
//             position={poi.location}>
//           <Pin background={'#DD332D'} glyphColor={'#f8efd3'} borderColor={'trasparent'} />
//           </AdvancedMarker>
//         ))}
//       </>
//     );
//   };