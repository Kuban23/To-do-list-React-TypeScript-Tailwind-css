import React from 'react'
import { BsCheck } from 'react-icons/bs'

const Check = () => {
   return (
      <div className='bg-pink-400 border-2 rounded-lg border-pink-400  w-6 h-6 mr-3 flex items-center justify-center'>
         <BsCheck className=' text-gray-900' size={24} />
      </div>
   )
}

export default Check