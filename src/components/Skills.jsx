import React from 'react'
import SkillData from '../SkillData'

const Skills = () => {
  return (
    <>
      <section id='skills'>
        <div className='container'>
            <div className='heading'>Skills</div>
            <div className='skills-content'>
              {
                SkillData.map((data,index)=>(
                  <div key={index}>
                    <img src={data.image} alt="skill img" width={'100px'} height={'100px'} />
                  </div>
                ))
              }
            </div>
        </div>
      </section>
    </>
  )
}

export default Skills
