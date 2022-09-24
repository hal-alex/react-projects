import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [itemName, setItemName] = useState("")
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, message: "", type: ""})


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!itemName) {
      setAlert({ ...alert, show:true})
    } else if (itemName && isEditing) {

    } else {
      const newItem = {id: new Date().getTime().toString(), title: itemName}
      setList([...list, newItem])
      setItemName("")
    }

  }

  return (
    <>
      <section className="section-center">
      {alert.show && <Alert />}
        <form className='grocery-form' onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <button>
            {isEditing ? "Edit" : "Add"}
          </button>
        </form>
      </section>
      <section>
      {list.length > 0 && (
        <div>
            <List items={list}></List>
            <button className="clear-btn">clear items</button>
        </div>
      )}

      </section>
    </>
  )
}

export default App
