import { useEffect, useState } from 'react'

import TodoSearch from './components/TodoSearch'
import TodoItem from './components/TodoItem'
import TodoFilter from './components/TodoFilter'
import TodoCreator from './components/TodoCreator'
import TodoModal from './components/TodoModal'

import { v4 as uuid } from 'uuid'

function App( ) {

  const [ todoList, setTodoList ] = useState( () => localStorage.getItem('todoList') ? JSON.parse(localStorage.getItem('todoList')) : [])
  const [ filteredTodoList, setFilteredTodoList ] = useState( [] )
  const [ modalOptions, setModalOptions] = useState( {} )
  const [ selectedFilter, setSelectedFilter ] = useState( 'All' )

  useEffect( ( ) => {

    filterList( selectedFilter )
    localStorage.setItem('todoList', JSON.stringify(todoList))

  },[ todoList ])

  function createTodo ( todo )
  {
    if( todo.length === 0 ) return

    setTodoList( prevList => prevList.concat ( 
      { id: uuid(), title: todo, completed: false } 
    ))

    filterList( "All" )
  }

  function handleModalOptions ( todo, type )
  {
    setModalOptions( { itemToEdit: todo, type: type } )
  }

  function filterList( filter )
  {

    if ( filter === 'Todo' )
    {
      setFilteredTodoList( todoList.filter( todo => todo.completed === false ) )
    }
    else if ( filter === 'Done' )
    {
      setFilteredTodoList( todoList.filter( todo => todo.completed === true ) )
    }
    else {
      setFilteredTodoList( todoList )
    }

    setSelectedFilter( filter )
  }

  function searchTodo ( query )
  {
    setFilteredTodoList( todoList.filter( todo => todo.title.toLowerCase( ).includes( query.toLowerCase( ) ) ) )
  }

  function handleTaskCompletion ( id )
  {
    setTodoList( prevList => prevList.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ) )
    filterList( selectedFilter )
  }

  function deleteTodo ( id )
  {
    setTodoList( prevList => prevList.filter( todo => todo.id !== id ) )
    resetModalOptions( )
  }

  function editTodo ( editedTodo )
  {
    setTodoList( prevList => prevList.map( todo => todo.id === editedTodo.id ? {...editedTodo} : todo ) )
    resetModalOptions( )
  }

  function resetModalOptions( )
  {
    setModalOptions({})
  }

  return (
    <div className='min-h-screen bg-[#242424] flex place-content-center'>
        <div className='w-full flex flex-col items-center'>
          
          <div className='flex items-center space-x-2 select-none'>
            <h1 className='text-[#F5F5F5] text-xl text-center font-bold my-14'>Todo List</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#F5F5F5" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>

          { modalOptions.type === 'delete' && 
            <TodoModal type='delete' 
            closeModal={resetModalOptions} 
            itemToEdit={modalOptions.itemToEdit} 
            handleSubmit={deleteTodo} 
            message={`Do you really want to delete the task "${modalOptions.itemToEdit.title}"? This action is irreversible.`} /> 
          }
          { modalOptions.type === 'edit' && 
            <TodoModal type='edit' 
            closeModal={resetModalOptions} 
            itemToEdit={modalOptions.itemToEdit} 
            handleSubmit={editTodo}
            /> 
          }

          <TodoCreator handleSubmit={createTodo} />

          <TodoSearch searchTodo={ searchTodo } />

          <div className='flex space-x-2 my-4'>
            <TodoFilter filter="All" selectedFilter={ selectedFilter } selectFilter={ filterList } />
            <TodoFilter filter="Todo" selectedFilter={ selectedFilter } selectFilter={ filterList } />
            <TodoFilter filter="Done" selectedFilter={ selectedFilter } selectFilter={ filterList } />
          </div>

          { filteredTodoList.length > 0 && 
            <div className="bg-[#415a77] p-4 rounded-md w-5/6 max-w-[310px] space-y-2 mb-8">
              { filteredTodoList.map(todo => <TodoItem completeTask={ handleTaskCompletion } editTodo={handleModalOptions} deleteTodo={handleModalOptions} key={ todo.id } todo={ todo } />)}
            </div>
          }
        </div>
    </div>
  )
}

export default App
