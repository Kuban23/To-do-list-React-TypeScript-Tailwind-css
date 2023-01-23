import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type TodoType = {
   id: number,
   title: string,
   isCompleted: boolean
}

type PropsType = {
   todos: Array<TodoType>
}

   export const TodoItem = (props: PropsType) => {

   return (
      <div>
         {props.todos.map(todo =>
            <div key={todo.id}>{todo.title}</div>)
         }
      </div>
   )
}
