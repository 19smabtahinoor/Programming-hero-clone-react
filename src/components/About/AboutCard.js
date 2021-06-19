import React from 'react'

function AboutCard({key,image,title,description}) {
    return (
        <>
            <div className="bg-white shadow-xl rounded-xl p-7 box-border m-3" key={key}>
                <div className="pb-4">
                    <img className="about_card_image" src={image} alt="cardImage"/>
                </div>

                <div className="">
                    <h5 className="banglafont">{title}</h5>
                    <p className="banglafont">{description}</p>
                </div>
            </div>
        </>
    )
}

export default AboutCard
