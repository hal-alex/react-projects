import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {


  return (
    <>
      <div className={`modal-overlay show-modal`}>

          <div className='modal-container'>
            Testing <button><FaTimes></FaTimes></button>
          </div>
        
    </div>


    </>


  )
}

export default Modal

// const Modal = () => {

//   const [showModal, setShowModal] = useState(false)

//   return (
//     <>
//       <button className='btn' onClick={() => setShowModal(!showModal)}>show modal</button>
//       {showModal && (
//         <div className='modal-container'>
//           Testing <button onClick={() => setShowModal(!showModal)}><FaTimes></FaTimes></button>
//         </div>
//       )}

//     </>


//   )
// }

// export default Modal

