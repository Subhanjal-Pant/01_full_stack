/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useForm } from "react-hook-form"

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data)=>{
    console.log(data);
  }
  return (
    <div className='flex flex-row '>
      <div className='flex flex-col relative top-20  w-1/2 h-[60vh] '>
        <h1 className='font-bold text-3xl text-center my-5'>Login User</h1>
        <form
        className='flex flex-col gap-4 p-4 items-center my-10'
        onSubmit={handleSubmit(onSubmit)}
        action="">
          <div className='flex w-3/4 justify-center'>
            <label
            className='w-[100px]'htmlFor="email">Email</label>
            <input
            required
            {...register("email")}
            className='border-2 border-black mx-16 rounded px-2 w-[250px]'
            id='email'
            type="email" />
          </div>
          <div className='flex w-3/4 justify-center'>
            <label
            className='w-[100px]'
            htmlFor="password">Password</label>
            <input
            required
            {...register("password")}
            className='border-2 border-black mx-16 rounded px-2 w-[250px]'
            type="password" />
          </div>
          <button
          type='submit'
          className='text-xl border-2 px-3 py-[3.5px] rounded-lg bg-blue-600 text-white font-bold active:scale-95 active:bg-blue-700'>Submit</button>
        </form>
      </div>
      <div className='h-[80vh] w-1/2 flex items-center justify-center'>
        <img src="/assets/login.png" style={{height:'600px'}} alt="" />
      </div>
    </div>
  )
}

export default Login
