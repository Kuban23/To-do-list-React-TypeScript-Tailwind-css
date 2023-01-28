import React, { FC } from 'react'
import { BsCheck } from 'react-icons/bs'

interface CheckProps {

   isCompleted: boolean,
}

const Check: FC<CheckProps> = ({ isCompleted }) => {
   return (
      <div className={` border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400': ''} w-6 h-6 mr-3 flex items-center justify-center`}>
         {isCompleted &&
            <BsCheck className=' text-gray-900' size={24} />
         }
      </div>
   )
}

export default Check