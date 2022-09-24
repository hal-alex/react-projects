import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let localList = localStorage.getItem("list")
  if(localList) {
    return JSON.parse(localStorage.getItem("list"))
  } else {
    return []
  }
}

function App() {

  const [itemName, setItemName] = useState("")
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({show: false, message: "", type: ""})


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!itemName) {
      handleAlert(true, "only valid items", "danger" )
    } else if (itemName && isEditing) {
        setList(list.map((item) => {
          if (item.id === editID) {
            return { ...item, title:itemName }
          }
          return item
        } ))
        setItemName("")
        setEditID(null)
        setIsEditing(false)
        handleAlert(true, "you edited an item", "success")
    } else {
      handleAlert(true, `you've added ${itemName}`, "success")
      const newItem = {id: new Date().getTime().toString(), title: itemName}
      setList([...list, newItem])
      setItemName("")
    }
  }

  const handleAlert = (show=false, message="", type="") => {
    setAlert({ show, message, type })
  }

  const deleteList = () => {
    handleAlert( true, "you deleted all items", "danger" )
    setList([])
  }

  const removeItem = (id) => {
    handleAlert(true, "deleted item", "danger")
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setItemName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list) )
  }, [list])
  

  return (
    <>
      <section className="section-center">
        {alert.show && <Alert alert={alert} handleAlert={handleAlert} list={list}/>}
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
            <List items={list} 
            removeItem={removeItem} 
            editItem={editItem}></List>
            <button className="clear-btn" onClick={deleteList}>clear items</button>
        </div>
      )}

      </section>
    </>
  )
}

export default App
