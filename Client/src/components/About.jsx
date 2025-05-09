// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-row'>
      <div className="left flex items-center h-[90vh] px-5 w-1/2">
        <img 
        className='h-[500px]'
        src="assets/about.png" alt="Error" />

      </div>
      <main className="right w-1/2" >
        <h1 className='mt-14 font-bold text-xl'> 1. User Database is a platform that allows users to securely register and store their data. Our mission is to create a seamless and secure experience for managing personal information.</h1>
        <h2 className='font-bold text-lg mt-6'>2. Built with modern web technologies like React for the frontend, Node.js and Express for the backend, and MongoDB for secure data storage</h2>
        <hr className='mt-10'/>
        <h3 className='text-xl text-center font-bold '>Contact Us:</h3>
        <p className='text-lg'>Telephone : 096-420-163</p>
        <p className='text-lg'>Phone number : 9848813316</p>
        <p className='text-lg'>Email: userDatabase100@gmail.com</p>
        <hr />
        <div className='font-bold absolute right-0 bottom-0 m-8'>
          <h4>Created and maintained by: </h4>
          <li>Subhanjal Pant</li>
          <p className='underline'>Email: subhanjalpant1@gmail.com</p>
        </div>
      </main>
    </div>
    </>
  )
}

export default About
