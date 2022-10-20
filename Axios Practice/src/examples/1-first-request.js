import { useEffect, useState } from 'react'
import axios from "axios"

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products'

const FirstRequest = () => {

  const [data, setData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get(url)
      setData(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  // useEffect(() => {
  //   fetchData()
  // }, []);

  return (
    <>
      <h2 className='text-center'>first request</h2>
      <button onClick={fetchData}> Fetch Data</button>
      {data.map((item) => {
        const { id , image, name} = item
        return (
          <div key={id}>
            <h4>{name}</h4>
            <img src={image} alt="" />
          </div>
        )
      })}
    </>


  )
}
export default FirstRequest
