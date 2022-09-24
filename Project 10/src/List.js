import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, }) => {


  return (
    <>
      <div className="grocery-list">
        {items.map(item => {
          const {id, title} = item
          return (
            <>
              <article key={id} className="grocery-item">
              <div className='btn-container'>
                  <p className='title'>{title}</p>
                  <button type='button' className='edit-btn'> <FaEdit></FaEdit> </button>
                  <button type='button' className='delete-btn'> <FaTrash></FaTrash> </button>
              </div>

              </article>
            </>

          )
        })}
      </div>
    </>
  )
}

export default List
