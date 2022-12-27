import { useState } from "react"

export default function TodoSearch( { searchTodo } )
{
    const [query, setQuery] = useState('')

    function handleSubmit( )
    {
        searchTodo( query )
        setQuery('')
    }

    return (
        <div className="flex items-center space-x-2">
            <input
            value={ query }
            onChange={( e ) => setQuery( e.target.value ) } 
            type="text" 
            className="h-8 w-64 bg-[#F5F5F5] rounded-md focus:outline-none indent-4"
            />
            <button onClick={handleSubmit} className="flex justify-center items-center bg-[#457b9d] rounded-md w-10 h-8 hover:opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F5F5F5" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
    )
}