import React, { FC } from 'react'

interface CreateTodoItemType {
   id: number,
   title: string,
   isCompleted: boolean,
}

interface CreateTodoItemProps {
   todos: Array<CreateTodoItemType>
   setTodoLocalStorage: Function
}

const CreateTodoItem: FC<CreateTodoItemProps> = ({ todos, setTodoLocalStorage }) => {

   const [title, setTitle] = React.useState('')

   const addNewTodo = (title: string) => {
      let newTodo = {
         id: Date.now(),
         title: title,
         isCompleted: false
      }
      setTodoLocalStorage([newTodo, ...todos])
      setTitle('')
   }

   return (
      <div className='mx-5 flex items-center justify-between mb-20 border-zinc-800 rounded-2xl border-2 px-5 py-2'>
         <input className='w-full bg-transparent border-none outline-none' value={title} type='text' placeholder='Введи задание и нажми Enter'
            onChange={event => setTitle(event.target.value)}
            onKeyDown={event => event.key === 'Enter' && addNewTodo(title)}
         />
      </div>
   )
}

export default CreateTodoItem