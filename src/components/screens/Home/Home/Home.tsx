import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import CreateTodoItem from '../CreateTodoItem/CreateTodoItem';
import FilterTodoItem from '../FilterTodoItem/FilterTodoItem';
import { TodoItem } from '../TodoItem/TodoItem';
import classes from './Home.module.css';

export type TodofilterType = 'all' | 'active' | 'completed';

const Home = () => {
   const [todos, setTodos] = React.useState([
      { id: 1, title: 'Изучить React', isCompleted: false },
      { id: 2, title: 'Изучить TypeScript', isCompleted: false },
      { id: 3, title: 'Изучить Redux', isCompleted: false },
   ]);

   const [filter, setFilter] = React.useState<TodofilterType>('all');

   let filterTodo = todos;

   if (filter === 'completed') {
      filterTodo = todos.filter((t) => t.isCompleted === true);
   }

   if (filter === 'active') {
      filterTodo = todos.filter((t) => t.isCompleted === false);
   }

   const filterTodoForList = (value: TodofilterType) => {
      setFilter(value);
   };

   const saveLocalStorageTodo = (newTodo: any) => {
      localStorage.setItem('newTodo', JSON.stringify(newTodo));
      setTodos(newTodo);
   };

   React.useEffect(() => {
      const getTodoItem = localStorage.getItem('newTodo');
      if (getTodoItem) {
         setTodos(JSON.parse(getTodoItem));
      }
   }, []);

   const removeTodo = (id: number) => {
      saveLocalStorageTodo(todos.filter((t) => t.id !== id));
   };

   const checkedTodo = (id: number) => {
      const checkedTodo = todos.map((item) => {
         if (item.id === id) {
            return {
               ...item,
               isCompleted: !item.isCompleted,
            };
         } else {
            return item;
         }
      });
      saveLocalStorageTodo(checkedTodo);
      //setTodos(prevState=> prevState.map(item=>item.id === id ? {...item, isCompleted: !item.isCompleted} : item))
   };

   return (
      <div className={classes.page}>
         <h1 className={classes.page__title}>Список задач.</h1>

         <FilterTodoItem filterTodoForList={filterTodoForList} />

         <CreateTodoItem
            todos={todos}            
            saveLocalStorageTodo={saveLocalStorageTodo}
         />

         <TodoItem todos={filterTodo} removeTodo={removeTodo} checkedTodo={checkedTodo} />
      </div>
   );
};

export default Home;
