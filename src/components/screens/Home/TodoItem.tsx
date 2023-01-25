import { type } from '@testing-library/user-event/dist/type'
import React from 'react'
import Check from '../../check/Check'
import {BsTrash} from 'react-icons/bs'

type TodoType = {
   id: number,
   title: string,
   isCompleted: boolean,
}

type PropsType = {
   todos: Array<TodoType>
}

export const TodoItem = (props: PropsType) => {

   return (
      <div>

         {props.todos.map(todo =>
            <div className='flex items-center bg-zinc-800 mb-5 mx-5 rounded-2xl px-4 py-4 justify-between' key={todo.id}>
               <span className='flex items-center'>
               <button>
             <Check />
             </button>     
               
               {todo.title}
               </span>
             
               <button>
                  <BsTrash size={22} className='hover:text-red-700 duration-500 text-gray-600' />
               </button>
            </div>)
         }

      </div>
   )
}
