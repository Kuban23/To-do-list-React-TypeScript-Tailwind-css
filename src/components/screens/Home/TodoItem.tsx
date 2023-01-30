import React, { FC } from 'react'
import Check from '../../check/Check'
import { BsTrash } from 'react-icons/bs'
import cn from 'classnames'

interface TodoType {
   id: number,
   title: string,
   isCompleted: boolean,
}

interface TodoItemProps {
   todos: Array<TodoType>
   checkedTodo: Function
   removeTodo: Function
}

export const TodoItem: FC<TodoItemProps> = ({ todos, checkedTodo, removeTodo }) => {

   const AddQuantityTodo = todos.length;
   const completeQuantityTodo = todos.filter((todo) => todo.isCompleted).length;

   return (
      <div>
         <div className="flex justify-between px-6 mb-5">
            <div className="flex flex-col items-start">
               <p>Всего созданных дел</p>
               <span className="bg-zinc-800 rounded-2xl px-2 py-1">{AddQuantityTodo}</span>
            </div>

            <div>
               <p>Выполненных дел</p>
               <span className="bg-zinc-800 rounded-2xl px-2 py-1">
                  {completeQuantityTodo} из {AddQuantityTodo}
               </span>
            </div>
         </div>
         {todos.map(todo =>
            <div className='flex items-center bg-zinc-800 mb-5 mx-5 rounded-2xl px-4 py-4 justify-between
            hover:bg-zinc-700 hover:opacity-80 ease-in-out duration-500' key={todo.id}>
               <span className='flex items-center'>
                  <button onClick={() => checkedTodo(todo.id)}>
                     <Check
                        isCompleted={todo.isCompleted}
                     />
                  </button>

                  <span className={cn({ 'line-through': todo.isCompleted })}>{todo.title}</span>
               </span>

               <button onClick={() => removeTodo(todo.id)}>
                  <BsTrash size={22} className='hover:text-red-700 duration-500 text-gray-600' />
               </button>
            </div>)
         }

      </div>
   )
}
