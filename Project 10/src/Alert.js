import React, { useEffect } from 'react'

const Alert = ({ alert, handleAlert, list }) => {
  const { message, type } = alert

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      handleAlert()
    }, 3000);
    return () => clearTimeout(alertTimeout)
  }, [list])
  

  return (
    <>
      <p className={`alert alert-${type}`}>{message}</p>

    </>
  )
}

export default Alert
