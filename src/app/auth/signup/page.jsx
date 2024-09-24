import Link from 'next/link';
import { Mail, Lock, User, UserPlus } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 p-6 sm:p-10 bg-white rounded-xl shadow-md'>
        <div className='text-center'>
          <h2 className='mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900'>
            Create a new account
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Or{' '}
            <Link
              href='/auth/login'
              className='font-medium text-blue-600 hover:text-blue-500'
            >
              sign in to your account
            </Link>
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div className='relative'>
              <label htmlFor='name' className='sr-only'>
                Full Name
              </label>
              <User
                className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                id='name'
                name='name'
                type='text'
                autoComplete='name'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Full Name'
              />
            </div>
            <div className='relative'>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <Mail
                className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <Lock
                className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <UserPlus
                  className='h-5 w-5 text-blue-500 group-hover:text-blue-400'
                  aria-hidden='true'
                />
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
