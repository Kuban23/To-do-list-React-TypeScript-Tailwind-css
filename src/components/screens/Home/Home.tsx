import React from 'react'
import CreateTodoItem from './CreateTodoItem';
import FilterTodoItem from './FilterTodoItem';


import { TodoItem } from './TodoItem';

const Home = () => {

   const [todos, setTodos] = React.useState([
      { id: 1, title: 'Изучить React', isCompleted: false },
      { id: 2, title: 'Изучить TypeScript', isCompleted: false },
      { id: 3, title: 'Изучить Redux', isCompleted: false },
   ]);

   const checkedTodo = (id: number) => {
      setTodos(prev => prev.map(item => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
   }

   const removeTodo = (id: number) => {
      setTodos(todos.filter(todo => todo.id !== id))
   }

   return (
      <div className='bg-gray-900 h-screen text-white w-4/5 mx-auto'>
         <h1 className=' font-bold text-2xl text-center mb-10 pt-5'>Список дел.</h1>

         <FilterTodoItem />
         <CreateTodoItem />
         <TodoItem
            todos={todos}
            checkedTodo={checkedTodo}
            removeTodo={removeTodo}
         />


      </div>
   )
}

export default Home