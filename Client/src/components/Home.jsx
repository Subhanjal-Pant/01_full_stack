// eslint-disable-next-line no-unused-vars
import React from 'react'

const Home = () => {
  return (
    <main className='flex '>
      <div className="left w-1/2 py-16 flex flex-col gap-10 px-4 lg:px-20">
        <h1 className='font-bold text-5xl'>Welcome to USER Database</h1>
        <h2 className='text-4xl w-full'>We store and protect your valuable data!</h2>
        <p className='text-2xl'>We are unbelievely secure and your data is completely private</p>
        <span className='font-bold absolute bottom-0 m-4'>
            <p className='text-lg'>In association with:</p>
            <p className='text-lg'>SP development IT firm 👋👋 </p>
        </span>
      </div>
      <div className="right absolute xl:right-40 right-0">
        <img src="assets/cover.png" alt="No Image Found" width={"400px"} />
      </div>
    </main>
  )
}

export default Home
