import React, { FC } from 'react';
import classes from './CreateTodoItem.module.css';

interface CreateTodoItemType {
   id: number;
   title: string;
   isCompleted: boolean;
}

interface CreateTodoItemProps {
   todos: Array<CreateTodoItemType>;
   saveLocalStorageTodo: (obj: object[]) => void;
}

const CreateTodoItem: FC<CreateTodoItemProps> = ({ todos, saveLocalStorageTodo }) => {
   const [title, setTitle] = React.useState('');

   const addNewTodo = () => {
      const newTodo = {
         id: Date.now(),
         title: title,
         isCompleted: false,
      };
      saveLocalStorageTodo([newTodo, ...todos]);
      setTitle('');
   };

   return (
      <div className={classes.createTodo}>
         <input
            className={classes.createTodo__input}
            type="text"
            placeholder="Введи задание и нажми Enter"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={(event) => event.key === 'Enter' && addNewTodo()}
         />
      </div>
   );
};

export default CreateTodoItem;
