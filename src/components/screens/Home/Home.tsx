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

   React.useEffect(() => {
      const newtask = localStorage.getItem('newTodo');
      if (newtask) {
         setTodos(JSON.parse(newtask))
      }
   }, [])

   const setTodoLocalStorage = (newTodo: any) => {
      setTodos(newTodo)
      localStorage.setItem('newTodo', JSON.stringify(newTodo))
   }

   const checkedTodo = (id: number) => {
      const newTodo = todos.map(todo => {
         if (todo.id === id) {
            return {
               ...todo,
               isCompleted: !todo.isCompleted
            }
         }
         return todo;
      })
      setTodoLocalStorage(newTodo)
      // setTodos(prev => prev.map(item => item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
   }

   const removeTodo = (id: number) => {
      setTodoLocalStorage(todos.filter(todo => todo.id !== id))
   }

   return (
      <div className='bg-gray-900 h-screen text-white w-4/5 mx-auto'>
         <h1 className=' font-bold text-2xl text-center mb-10 pt-5'>Список дел.</h1>

         <FilterTodoItem />
         <CreateTodoItem
            todos={todos}
            setTodoLocalStorage={setTodoLocalStorage}
         />
         <TodoItem
            todos={todos}
            checkedTodo={checkedTodo}
            removeTodo={removeTodo}
         />


      </div>
   )
}

export default Home