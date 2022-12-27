import 'animate.css'
import { useState } from 'react'

export default function TodoModal( { closeModal, type, itemToEdit, handleSubmit, message } )
{
    const [todoTitle, setTodoTitle] = useState( itemToEdit?.title ?? '')

    function submitTodo( )
    {
        if( type === 'edit' )
        {
            handleSubmit({ ...itemToEdit, title: todoTitle, completed: false})
        }
        else {
            handleSubmit( todoTitle )
        }

        closeModal( )

    }

    return (
    <div onClick={ closeModal } className="fixed bg-black/60 top-0 right-0 left-0 bottom-0 min-w-screen min-h-screen z-40">
        <div onClick={e => e.stopPropagation( )} className="animate__animated animate__backInDown bg-[#F5F5F5] p-4 rounded-md my-6 max-w-[300px] mx-auto">
            {
                type === 'create' || type === 'edit' ?
                <div>
                    <p>{ type === 'create' ?  'Todo Title' : 'Edit Todo' }</p>
                    <div className='flex space-x-2'>
                        <input
                            value={todoTitle}
                            onChange={e => setTodoTitle( e.target.value )}
                            type="text"
                            className="h-8 w-56 bg-[#F5F5F5] rounded-md focus:outline-none indent-2 border border-[#457b9d] text-sm"
                            />
                        <button onClick={submitTodo} className="flex justify-center items-center bg-[#457b9d] rounded-md w-10 h-8 hover:opacity-80">
                            { type === 'edit' ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#F5F5F5" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#F5F5F5" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            }
                        </button>
                    </div>
                </div>
                :
                <div className='flex flex-col text-center'>
                    <p className='mb-2'>{ message }</p>
                    {
                        type === 'delete' &&
                        <div className='flex space-x-2 justify-center'>
                            <button onClick={ closeModal } className='bg-[#F5F5F5] border-[#1f1f1f] border-2 rounded-md px-2 py-1 hover:opacity-80'>Cancel</button>
                            <button onClick={ ( ) => handleSubmit( itemToEdit.id ) } className='bg-[#e63946] border-[#e63946] text-[#F5F5F5] border-2 rounded-md px-2 py-1 hover:opacity-80'>Delete</button>
                        </div>
                    }
                </div>

            }
        </div>
    </div>
    )
}