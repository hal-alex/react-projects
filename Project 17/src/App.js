// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import {
//   FaEnvelopeOpen,
//   FaUser,
//   FaCalendarTimes,
//   FaMap,
//   FaPhone,
//   FaLock,
// } from 'react-icons/fa'

// const url = 'https://randomuser.me/api/'
// // const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

// function App() {

//   const [userData, setUserData] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [titleText, setTitleText] = useState("name")
//   const [divText, setDivText] = useState("")

//   const pullData = async () => {
//     try {
//       setLoading(true)
//       const response = await axios(url)
//       console.log(response.data.results[0])
//       setUserData(response.data.results[0])
//       setDivText(response.data.results[0].name.first)
//       setLoading(false)
//     } catch (error) {
//       console.log(error.response)
//     }
//   }

//   const handleHover = (e) => {
//     let targetVal = e.target.value
//     setTitleText(targetVal)
//     setDivText(() => {
//       if (targetVal === "name") {
//         return userData.name.first
//       } else if (targetVal === "age") {
//         return userData.dob.age
//       } else if (targetVal === "location") {
//         return `${userData.location.street.number} ${userData.location.street.name}`
//       } else if (targetVal === "password") {
//         return userData.login.password
//       } else {
//         return userData[`${targetVal}`]
//       }
//     })
//   }

//   useEffect(() => {
//     pullData()

//   }, [])

//   const loadingCompnent = () => {
//     return (
//       <img src="https://miro.medium.com/max/720/0*H3jZONKqRuAAeHnG.jpg" alt="default"></img>
//     )
//   }

//   const content = () => {
//     return (
//       <>
//         <img src={userData.picture.large} alt="user" ></img>
//         <p className="user-title">My {titleText} is</p>
//         <p className="user-value">{divText}</p>
//         <div className="values-list">
//           <button className='icon'
//             value="name"
//             onMouseEnter={(e) => handleHover(e)}>
//             <FaUser></FaUser> </button>
//           <button className='icon'
//             value="email"
//             onMouseEnter={(e) => handleHover(e)}>
//             <FaEnvelopeOpen></FaEnvelopeOpen> </button>
//           <button className='icon'
//             value="age"
//             onMouseEnter={(e) => handleHover(e)}>
//             <FaCalendarTimes></FaCalendarTimes> </button>
//           <button className='icon'
//             value="location"
//             onMouseEnter={(e) => handleHover(e)}>
//             <FaMap></FaMap> </button>
//           <button className='icon'
//             value="phone"
//             onMouseEnter={(e) => handleHover(e)}>
//             <FaPhone></FaPhone> </button>
//           <button className='icon'
//             value="password"
//             onMouseEnter={(e) => handleHover(e)}>
//             <FaLock></FaLock> </button>
//         </div>
//       </>
//     )
//   }

//   return (
//     <main>
//       <div className="block bcg-black"></div>
//       <div className="block">
//         <div className="container">
//           {loading ? loadingCompnent() : content()}
//           <button className='btn'
//             onClick={pullData}>
//             {loading ? "Loading..." : "Generate"}
//           </button>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default App

// Take 2

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

  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState("name")
  const [attribute, setAttribute] = useState("lorem ipsum")

  const pullData = async() => {
    const response = await axios(url)
    console.log(response)
  }

  useEffect(() => {
    pullData()
  }, [])


  const handleHover = (e) => {
    console.log(e)
  }


  return (
    <main>
      <div className="block bcg-black">

      </div>
      <div className="block">
        <div className="container">
          <img src={(user && user.image) || defaultImage}
            alt="default" className='user-img' />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{attribute}</p>
          <div className="values-list">
            <button className="icon"
              data-label="name"
              onMouseOver={handleHover}> <FaUser></FaUser> </button>
            <button className="icon"
              data-label="email"
              onMouseOver={handleHover}> <FaEnvelopeOpen></FaEnvelopeOpen> </button>
            <button className="icon"
              data-label="age"
              onMouseOver={handleHover}> <FaCalendarTimes></FaCalendarTimes></button>
            <button className="icon"
              data-label="street"
              onMouseOver={handleHover}> <FaMap></FaMap> </button>
            <button className="icon"
              data-label="phone"
              onMouseOver={handleHover}> <FaPhone></FaPhone> </button>
            <button className="icon"
              data-label="password"
              onMouseOver={handleHover}> <FaLock></FaLock> </button>
          </div>
          <button className="btn" type="button">
            {isLoading ? "Loading..." : "Generate User"} </button>
        </div>
      </div>
    </main>
  )
}

export default App
