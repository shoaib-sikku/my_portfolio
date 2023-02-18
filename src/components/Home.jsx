import React from 'react'
import Typewriter from 'typewriter-effect';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'
import CV from '../Box/cv.pdf'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className='container home-css'>
                    <div className='top-home'>
                        <h3 className='app-color'>Hi There...</h3>
                        <h1>I AM <span className='app-color'>MOHD SHOAIB</span></h1>
                        <h2>I am a <Typewriter
                            options={{
                                strings: ['frontend developer', 'web designer', 'web developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        </h2>
                        <p>This is my personal portfolio website for my works of web development.</p>
                        <a href={CV} download="Resume" className='main-btn'>Download CV</a>
                    </div>

                    <div className='bottom-home'>
                        <a href='https://github.com/shoaib-sikku'><BsGithub /></a>
                        <a href='https://www.instagram.com/invites/contact/?i=1aes8z1zcpjl7&utm_content=88hp7vx'><BsInstagram /></a>
                        <a href='https://www.linkedin.com/in/mohammad-shoaib-23419a256/'><BsLinkedin /></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
