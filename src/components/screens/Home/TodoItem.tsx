
import React, {FC} from 'react'
import Check from '../../check/Check'
import {BsTrash} from 'react-icons/bs'

interface TodoType {
   id: number,
   title: string,
   isCompleted: boolean,
}

interface TodoItemProps{
   todos: Array<TodoType>
   checkedTodo:Function
}

export const TodoItem: FC<TodoItemProps> = ({todos, checkedTodo}) => {

   return (
      <div>

         {todos.map(todo =>
            <div className='flex items-center bg-zinc-800 mb-5 mx-5 rounded-2xl px-4 py-4 justify-between
            hover:bg-zinc-700 hover:opacity-80 ease-in-out duration-500' key={todo.id}>
               <span className='flex items-center'>
               <button onClick={()=>checkedTodo(todo.id)}>
             <Check
             isCompleted={todo.isCompleted}
             />
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
