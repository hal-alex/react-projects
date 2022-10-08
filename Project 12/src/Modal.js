import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext  } from "../src/context"

const Modal = () => {

  const { isModalOpen, closeModal } = useContext(AppContext)

  return (
    <>
      <div className={`modal-overlay ${isModalOpen ? "show-modal" :""}`}>

          <div className='modal-container'>
            Testing <button 
            className='close-modal-btn'
            onClick={closeModal}
            ><FaTimes></FaTimes></button>
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

