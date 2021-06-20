import React from 'react'

function ProjectsCard({key,catergory,image,Title,Description}) {
    return (
        <>
        <div className="projects_card bg-white box-border p-9 rounded-xl shadow-xl" key={key}>
            <img src={image} alt="Project"/>
            <div className="pt-6">
                <span className="bg-purple-100 px-2 py-1 rounded-full text-sm">{catergory}</span>
                <div className="">
                    <h1 className="text-2xl pt-4">{Title}</h1>
                    <p className="banglafont text-md">{Description}</p>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default ProjectsCard
