import React from 'react'

function AboutCard2({key,serial,description}) {
    return (
        <>
           <div className="flex flex-row space-x-4 bg-white shadow-xl rounded-xl p-7 box-border m-3" key={key}>
               <div className="flex flex-row items-center">
                   <h1 className="banglafont about2_serial text-5xl text-gray-300">{serial}</h1>
               </div>

               <div className="flex flex-row items-center">
                   <p className="banglafont">{description}</p>
               </div>
           </div>
        </>
    )
}

export default AboutCard2
