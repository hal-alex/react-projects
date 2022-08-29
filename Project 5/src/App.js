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
    <main>
      <section className='menu section'>
        <div className="title">
              <h1>Alex's Food Menu</h1>
              <div className="underline"></div>
        </div>
        <div className='btn-container'>
          {categories.map(category => {
            return <button className='filter-btn' key={category} value={category} onClick={() => setSelectedCategory(category)}>{category}</button>
          })}
        </div>
        <section >
          {<Menu menu={menu} selectedCategory={selectedCategory}></Menu>}
        </section>
      </section>
    </main>
  )
}

export default App;
