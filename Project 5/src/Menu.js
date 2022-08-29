import React from 'react';

const Menu = (props) => {
  return (
    <>
      {props.menu.map(item => {
      const {id, title, category, price, img, desc} = item
      if (props.selectedCategory === "all") {
            return (
              <div key={id}>
                <p >{title}</p>
              </div>
            )}

      else if (props.selectedCategory === category) {
            return (
              <div key={id}>
                <p >{title}</p>
              </div>
      )
          }
        })}
    </>
  )
};

export default Menu;
