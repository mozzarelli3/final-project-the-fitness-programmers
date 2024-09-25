import Link from 'next/link';
import { Ruler, Weight, Target, ArrowRight } from 'lucide-react';

export default function UserDetailsPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8 p-6 sm:p-10 bg-white rounded-xl shadow-md'>
        <div className='text-center'>
          <h2 className='mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900'>
            Complete Your Profile
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            Please provide some additional information
          </p>
        </div>
        <form className='mt-8 space-y-6' action='#' method='POST'>
          <div className='rounded-md shadow-sm -space-y-px'>
            <div className='relative'>
              <label htmlFor='height' className='sr-only'>
                Height (cm)
              </label>
              <Ruler
                className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                id='height'
                name='height'
                type='number'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Height (cm)'
              />
            </div>
            <div className='relative'>
              <label htmlFor='weight' className='sr-only'>
                Weight (kg)
              </label>
              <Weight
                className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <input
                id='weight'
                name='weight'
                type='number'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
                placeholder='Weight (kg)'
              />
            </div>
            <div className='relative'>
              <label htmlFor='goal' className='sr-only'>
                Goal
              </label>
              <Target
                className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400'
                size={20}
              />
              <select
                id='goal'
                name='goal'
                required
                className='appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm'
              >
                <option value=''>Select your goal</option>
                <option value='lose_weight'>Lose Weight</option>
                <option value='gain_muscle'>Gain Muscle</option>
                <option value='maintain'>Maintain Weight</option>
                <option value='improve_fitness'>Improve Fitness</option>
              </select>
            </div>
          </div>

          <div>
            <Link
              href='/dashboard'
              className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
                <ArrowRight
                  className='h-5 w-5 text-blue-500 group-hover:text-blue-400'
                  aria-hidden='true'
                />
              </span>
              Continue
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
