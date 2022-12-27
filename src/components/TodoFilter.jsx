export default function TodoFilter({ filter, selectFilter, selectedFilter })
{
    return ( 
        <button 
        onClick={() => selectFilter( filter )} 
        className={`flex justify-center items-center font-bold text-[#F5F5F5] rounded-md w-24 py-3 hover:opacity-80 ${selectedFilter === filter ? 'bg-[#415a77]' : 'bg-[#457b9d]'}`}>
            { filter }
        </button>
    )
}