import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const contact = () => {
  return (
    <>
      <section id='contact'>
        <div className='container'>
          <div className='heading'>Contact</div>
          <div className='contact-content'>
            <div className='contact-info'>
              <div><h1>Get In Touch</h1></div>
              <div>
                <p><b>Name :</b> Mohd Shoaib</p>
                <p><b>Email :</b> <a href="mailto:ms1654922@gmail.com">ms1654922@gmail.com</a></p>
                <p><b>Mobile :</b> <a href="telto:9711406586">+91 9711406586</a></p>
                <p><b>Address :</b> New Brijpuri, Near Jagatpuri Police Station, Delhi-110051</p>
              </div>
              <div>
                <a href='https://github.com/shoaib-sikku'><BsGithub /></a>
                <a href='https://www.instagram.com/invites/contact/?i=1aes8z1zcpjl7&utm_content=88hp7vx'><BsInstagram /></a>
                <a href='https://www.linkedin.com/in/mohammad-shoaib-23419a256/'><BsLinkedin /></a>
              </div>
            </div>
            <div className='contact-form'>
              <form action='https://getform.io/f/f09b2ae0-8f4c-46f0-ab29-d08aac342489' method='POST'>
                <p>
                  <label htmlFor="name">Name :</label>
                  <input type="text" id='name' placeholder='Enter your name please..'  required/>
                </p>
                <p>
                  <label htmlFor="email">Email :</label>
                  <input type="email" id='email' placeholder='demo@example.com'  required/>
                </p>
                <p>
                  <label htmlFor="message">Message :</label>
                  <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                </p>

                <button className='main-btn' type={'submit'}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default contact
