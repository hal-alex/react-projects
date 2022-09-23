import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color } ) => {
  const { rgb, hex, weight } = color
  const [alert, setAlert] = useState(false)
  const placeholder = "#f15025"  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <>
      <article 
      style={{ backgroundColor:`rgb(${rgb})`}} 
      className={`color`}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
      >
        <p>
          Weight: {weight}%
        </p>
        <p>
          Hex: {hex}
        </p>
        {alert && <p>copied to clipboard</p>}
      </article>
    </>
  )
}

export default SingleColor
