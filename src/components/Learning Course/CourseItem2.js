import React from 'react'

function CourseItem2({ key, Content }) {
    return (
        <>
            <div className="flex px-5" key={key}>
                <div className="">
                    <i className="fa fa-check bg-red-400 text-white" aria-hidden="true"></i>
                </div>

                <div className="">
                    <p className="font-normal banglafont text-xl">{Content}</p>
                </div>
            </div>
        </>
    )
}

export default CourseItem2
