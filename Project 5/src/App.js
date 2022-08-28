import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    const buttons = () => {
      let onlyButtons = items.map(button => {
        return button.category
      })
      setCategories(["all", ...new Set(onlyButtons)])
    }

    buttons()
  }, [])

  return (
    <>
      {categories.map(category => {
        return <button>{category}</button>
      })}
    </>
  )
}

export default App;
