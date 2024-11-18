import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='container' className='pt-32 container'>
      <div className='grid md:grid-cols2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5x1' data-aos="zoom-out-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2'>
              Drop me a line, give me a call, or send me a massage by submitting tha foarm.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-out-up">
            <AiOutlineMail size={30} /> tehreemkhanzada23@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-out-up">
            <BsTelephoneFill  size={30} /> (021) 03161148091
            </div>
            </div>
            <div className='space-y-8'>
              <div className='flex flex-col gap-1' data-aos="zoom-out-up">
                <label htmlFor='name'>Name</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='name' />
              </div>
              <div className='flex flex-col gap-1' data-aos="zoom-out-up">
                <label htmlFor='email'>Email</label>
                <input type="text"
                className='h-[40px] bg-transparent border border-accent'
                id='email' />
              </div>
              <div className='flex flex-col gap-1' data-aos="zoom-out-up">
                <label htmlFor='email'>Message</label>
                <textarea
                className='bg-transparent border border-accent'
                id='message' rows={8}>
                </textarea>
              </div>
              <button className='bg-accent p-2 px-6' data-aos="zoom-out-up">Send</button>
            </div>
        </div>
     </div>

  )
};

export default Contact
