import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'

const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {

  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)

  const pullData = async () => {
    try {
      const response = await axios.get(url)
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    pullData()
  }, [])
  

  return <h2>random user starter</h2>
}

export default App
