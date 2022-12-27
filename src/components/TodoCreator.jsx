import { useState } from "react";
import TodoModal from "./TodoModal";

export default function TodoCreator ( { handleSubmit } )
{
    const [ isOpenModal, setIsOpenModal ] = useState( false )

    return (
        <>
            {isOpenModal && <TodoModal type="create" handleSubmit={handleSubmit} closeModal={() => setIsOpenModal( false )} />}

            <button onClick={() => setIsOpenModal( true ) } className='bg-[#457b9d] w-[80%] max-w-[300px] flex items-center justify-center py-3 rounded-md mb-6 hover:opacity-80'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#F5F5F5" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}