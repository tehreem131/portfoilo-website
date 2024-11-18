import React from 'react'

interface propsType {
    tital: string;
}

const Heading: React.FC<propsType> = ({tital}) => {
  return (
    <div className='text-center text-4xl pb-8'>
        <p className='border-b-4 inline-block pb-2'>{tital}</p>
    </div>
  )
}

export default Heading
