import React from 'react'

const CreateTodoItem = () => {
   return (
      <div className='mx-5 flex items-center justify-between mb-20 border-zinc-800 rounded-2xl border-2 px-5 py-2'>
         <input className='w-full bg-transparent border-none outline-none' type='text' placeholder='Введи задание и нажми Enter'
         />
      </div>
   )
}

export default CreateTodoItem