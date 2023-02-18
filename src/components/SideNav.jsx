import React, { useRef, useState } from 'react'
import img1 from '../Box/me.jpg'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill, BsFillBarChartFill } from 'react-icons/bs'
import { MdOutlineMessage } from 'react-icons/md'
import { IoBagSharp } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'
import { ImCross } from 'react-icons/im'
import GoToTop from '../GoToTop'


const SideNav = () => {
  const [toggle, setToggle] = useState(true);
  const navElement = useRef();

  const toggleBtn = () => {
    navElement.current.classList.toggle('active');
    console.log(navElement)
    setToggle(!toggle)
  }

  return (
    <>
      <nav ref={navElement}>
        <div className='inner-cover'>
          <img src={img1} alt="logo img" width={'150px'} height={'200px'} />
          <h2>Mohd Shoaib</h2>
          <h3>Frontend Developer</h3>
          <Link to={'home'} smooth duration={500} onClick={toggleBtn}>Home <AiFillHome /></Link>
          <Link to={'about'} smooth duration={500} onClick={toggleBtn}>About <BsFillInfoCircleFill /></Link>
          <Link to={'projects'} smooth duration={500} onClick={toggleBtn}>Projects <BsFillBarChartFill /></Link>
          <Link to={'skills'} smooth duration={500} onClick={toggleBtn}>Skills <IoBagSharp /></Link>
          <Link to={'contact'} smooth duration={500} onClick={toggleBtn}>Contact <MdOutlineMessage /></Link>
        </div>
      </nav>
      <GoToTop/>
      {
        toggle ? <div className="toggle" onClick={toggleBtn}><GiHamburgerMenu /></div> :
          <div className="toggle" onClick={toggleBtn}><ImCross /></div>
      }
    </>
  )
}

export default SideNav
