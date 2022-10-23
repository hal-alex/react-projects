import { useEffect } from 'react'

import authFetch from '../axios/custom'

import axios from 'axios'


const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {

  const fetchData = async () => {
    try {
      const response1 = await authFetch('/react-store-products')
      console.log(response1)
      const response2 = await axios(randomUserUrl)
      console.log(response2)
    } catch (error) { 
      console.log(error.response)
    }
  
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
