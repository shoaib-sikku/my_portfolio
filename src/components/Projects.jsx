import React from 'react'
import CardData from '../CardData'
import {AiFillEye} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

const Projects = () => {
    return (
        <>
            <section id='projects'>
                <div className='container'>
                    <div className='heading'>Projects</div>
                    <div className='projects-content'>

                        {
                            CardData.map((data,index) => (
                                <div className='card' key={index}>
                                    <img src={data.image} alt="img" width={'100%'} height={'150px'} />
                                    <div>{data.name}</div>
                                    <div className='card-links'>
                                        <a target={'_blank'} href={data.website}><AiFillEye/> Demo</a>
                                        <a target={'_blank'} href={data.github}><FiExternalLink/> Source</a>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
