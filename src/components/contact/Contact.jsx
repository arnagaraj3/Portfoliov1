import React from 'react'
import "./contact.scss"
import {motion,useInView} from "framer-motion"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const variants={
    initial: {
        y:500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};
const Contact = () => {

    const ref=useRef();
    const formRef=useRef();
    const [error,setError] =useState(false)
    const [success,setSuccess] =useState(false)
 
    const isInView =useInView(ref, {margin: "-100px"})
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0odateg', 'template_frnyohl', formRef.current, {
        publicKey: 'LZ5oL4uy6EzMhHE6w',
      })
      .then(
        () => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        },
      );
  };
  return (
    <motion.div className='contact' ref={ref} variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's get to Work!!</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>arnagaraj3@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>West Tambaram, Chennai</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+91 9566160772</span>
            </motion.div>
        </motion.div>
            <div className="formContainer">
            <motion.div className="phoneSvg" initial={{opacity: 1}} whileInView={{opacity:0}} transition={{delay: 1, duration:1}}>
            <svg width="400px" height="400px" viewBox="0 0 32.66 32.66" xmlns="http://www.w3.org/2000/svg">
            <motion.path strokeWidth={0.2} initial={{pathLength: 0}} animate={isInView && {pathLength: 1}} transition={{duration: 2}} d="M20.9994 16.4767V19.1864C21.0036 20.2223 20.0722 21.0873 19.0264 20.9929C10 21 3 13.935 3.00706 4.96919C2.91287 3.92895 3.77358 3.00106 4.80811 3.00009H7.52325C7.96247 2.99577 8.38828 3.151 8.72131 3.43684C9.66813 4.24949 10.2771 7.00777 10.0428 8.10428C9.85987 8.96036 8.9969 9.55929 8.41019 10.1448C9.69858 12.4062 11.5746 14.2785 13.8405 15.5644C14.4272 14.9788 15.0273 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.8579 15.6021 21.0104 16.0337 20.9994 16.4767Z" fill="#000000"/>
            <path d="M14.5 6.5C15.2372 6.64382 15.9689 6.96892 16.5 7.5C17.0311 8.03108 17.3562 8.76284 17.5 9.5M15 3C16.5315 3.17014 17.9097 3.91107 19 5C20.0903 6.08893 20.8279 7.46869 21 9M20.9994 16.4767V19.1864C21.0036 20.2223 20.0722 21.0873 19.0264 20.9929C10 21 3 13.935 3.00706 4.96919C2.91287 3.92895 3.77358 3.00106 4.80811 3.00009H7.52325C7.96247 2.99577 8.38828 3.151 8.72131 3.43684C9.66813 4.24949 10.2771 7.00777 10.0428 8.10428C9.85987 8.96036 8.9969 9.55929 8.41019 10.1448C9.69858 12.4062 11.5746 14.2785 13.8405 15.5644C14.4272 14.9788 15.0273 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.8579 15.6021 21.0104 16.0337 20.9994 16.4767Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </motion.div>
                <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity: 0}} whileInView={{opacity:1}} transition={{delay: 2, duration:1}}>
                    <input type="text" required placeholder="Name" name="from_name"/>
                    <input type="text" required placeholder="Email" name="email"/>
                    <textarea rows={8} placeholder='Message' name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
    </motion.div>
  )
}

export default Contact