import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technolgies I work With</h2>
          <p className='text-gray-500 pt-2'>
            I have a soild foundation in web development, specializing in HTML, CSS and Javascript. my experiance extends to using framworks like React and Next.js to create dynamic and user-friendly application;
          </p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3x1 sm:text4x1 text-green-500'>
            <div className='space-y-2 color-green-500'>
              <h2  data-aos="zoom-out-up">Typescript</h2>
              <h2  data-aos="zoom-out-up">React.Js</h2>
              <h2  data-aos="zoom-out-up">Next.Js</h2>
            </div>
            <div className='grid grid-cols-2 text-accent text-3x1 sm:text4x1 text-green-500'>
            <div className='space-y-2'>
              <h2  data-aos="zoom-out-up">HTML</h2>
              <h2  data-aos="zoom-out-up">CSS</h2>
              <h2  data-aos="zoom-out-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Skills
