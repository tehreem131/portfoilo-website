import React from 'react'
import Image from 'next/image';

interface propsType {
    tital: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType> = ({tital, desc, img, tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]'  data-aos="zoom-out-up">
        <div>
            <Image className=' w-[300px] sm:w-[350px] h-auto'
            src={img}
            width={350}
            height={350}
            alt={tital}
            />
        </div>
       
       <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{tital}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el) => (
                <div className='tags' key={el}>
                    {el}
                    </div>))}
          </div>
       </div>
    </div>
  )
}

export default Card
