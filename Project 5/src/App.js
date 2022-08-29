import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import menu from './data';

function App() {

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")

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
        return <button key={category} value={category} onClick={() => setSelectedCategory(category)}>{category}</button>
      })}
      <section>
        {<Menu menu={menu} selectedCategory={selectedCategory}></Menu>}
      </section>
    </>
  )
}

export default App;
