export default function TodoItem( { todo, deleteTodo, completeTask, editTodo } )
{
    return (
        <div className="flex items-center">
            <div onClick={( ) => completeTask( todo.id ) } className={`bg-[#F5F5F5] rounded w-72 h-8 flex items-center px-2 select-none mr-2 ${todo.completed ? 'line-through' : ''}`}>
                { todo.title }
            </div>
            <button onClick={( ) => editTodo( todo, 'edit' ) } className="flex justify-center items-center bg-[#ffc300] rounded-md w-10 h-8 hover:opacity-80 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            </button>
            <button onClick={( ) => deleteTodo( todo, 'delete' ) } className="flex justify-center items-center bg-[#e63946] rounded-md w-10 h-8 hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

        </div>
    )
}