import Reac,{FC} from 'react'

interface FilterTodoItemProps {
   chengeTodoFilter: Function
}


const FilterTodoItem: FC<FilterTodoItemProps> = ({ chengeTodoFilter }) => {

   return (
      <div className='flex justify-around gap-3 mb-7'>
         <button onClick={()=>chengeTodoFilter('active')} className='border-2 rounded-lg py-2 bg-zinc-800 border-none rounded-xl items-center w-32
   hover:bg-zinc-700 hover:opacity-80 ease-in-out duration-500'>Активные</button>
         <button onClick={()=>chengeTodoFilter('completed')} className='border-2 rounded-lg py-2 bg-zinc-800 border-none rounded-xl items-center w-32
   hover:bg-zinc-700 hover:opacity-80 ease-in-out duration-500'>Выполненные</button>
         <button onClick={()=>chengeTodoFilter('all')} className='border-2 rounded-lg py-2 bg-zinc-800 border-none rounded-xl items-center w-32
   hover:bg-zinc-700 hover:opacity-80 ease-in-out duration-500'>Все</button>
      </div>
   )
}

export default FilterTodoItem