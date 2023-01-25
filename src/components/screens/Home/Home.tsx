import React from 'react'
import { TodoItem } from './TodoItem';

const Home = () => {

   const todos = [
      { id: 1, title: 'Изучить React', isCompleted: false },
      { id: 2, title: 'Изучить TypeScript', isCompleted: false },
      { id: 3, title: 'Изучить Redux', isCompleted: false },

   ];

   return (
      <div className='bg-gray-900 h-screen text-white w-4/5 mx-auto'>
         <h1 className=' font-bold text-2xl text-center mb-10 pt-5'>Список дел.</h1>
            <TodoItem todos={todos} />

        
      </div>
   )
}

export default Home