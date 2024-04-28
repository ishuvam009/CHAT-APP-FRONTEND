import React from 'react'
import GenderCheckBox from './GenderCheckBox';

const SignUp = () => {
  return <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='h-full w-full p-6 bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>

    <div>
        <label className='label p-2'>
		<span className='text-base label-text text-gray-100'>Full Name</span>
		</label>
		<input type='text' placeholder='Your Name' className='w-full input input-bordered  h-10'/>
    </div>

    <div>
        <label className='label p-2 '>
		<span className='text-base label-text text-gray-100'>Username</span>
		</label>
		<input type='text'placeholder='username'className='w-full input input-bordered h-10'/>
    </div>

    <div>
        <label className='label'>
		<span className='text-base label-text text-gray-100'>Password</span>
	    </label>
		<input type='password'placeholder='Enter Password'className='w-full input input-bordered h-10'/>
    </div>

    <div>
        <label className='label'>
		<span className='text-base label-text text-gray-100'>Confirm Password</span>
		</label>
		<input type='password'placeholder='Confirm Password'className='w-full input input-bordered h-10'/>
    </div>

    {/* gender function */}
    <GenderCheckBox />

    <a className='text-sm hover:underline hover:text-amber-400 inline-block text-gray-100'>
    Already have an account?
    </a>

    <div>
        <button className='btn btn-block btn-sm mt-2 border border-slate-700'>LogIn</button>
    </div>

    </form>
    </div>
  </div>
  
}

export default SignUp;
