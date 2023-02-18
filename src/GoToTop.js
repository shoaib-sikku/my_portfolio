import React, { useState, useEffect } from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'
import './style/index.scss'

const GoToTop = () => {
    const [scroll, setScroll] = useState(false);

    const gotop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }) 
    }

    const handleHeight = () => {
        let heightscrollHid = 270; 
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop; 

        if (winScroll > heightscrollHid) {
            setScroll(true)
        } else {
            setScroll(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', handleHeight)
    })

    return (
        <>
            {
                scroll && <div className="goToTop" onClick={gotop}><FaArrowAltCircleUp /></div>
            }

        </>
    )
}

export default GoToTop
