import React from 'react'

function TestimonialCard({ key, image, name, comment }) {
    return (
        <>
            <div className="bg-white shadow-xl rounded-xl p-6 box-border mx-6" key={key}>
                <div className="flex flex-col items-center">
                    <img className="rounded-full relative -top-10" src={image} alt="students" width="75px" height="75px" />
                    <h2 className="text-lg">{name}</h2>

                    <div className="flex flex-row justify-content-center pb-6">
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>
                        <i className="fas fa-star text-yellow-400 m-0"></i>

                    </div>
                </div>

                <div className="">
                    <h3 className="text-base text-gray-500 text-center font-normal">{comment}</h3>
                </div>

            </div>
        </>
    )
}

export default TestimonialCard
