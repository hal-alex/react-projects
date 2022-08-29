import React from 'react';

const Menu = (props) => {

  const individualMenuItem = (item) => {
    const { id, title, category, price, img, desc } = item
    return (
      <article className='menu-item' key={id}>
        <img src={img} alt={title} className="photo"/>
        <div className="item-info">
          <p >{title}</p>
          <p className='item-text'>{desc}</p>
          <p className='price'>${price}</p>
        </div>

      </article>
    )
  }
  return (
    <>
    <div className="section-center">
        {props.menu.map(item => {
          const { id, title, category, price, img, desc } = item
          if (props.selectedCategory === "all") {
            return individualMenuItem(item)
          }
          else if (props.selectedCategory === category) {
            return individualMenuItem(item)
          }
        })}
    </div>
    </>
  )
};

export default Menu;
