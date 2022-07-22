import React from 'react'

function Modal({modal,setModal,component}) {
  return (
    <div className='form-modal col-md-8'>
        <p className='modal-close-button'
        onClick={() => {
            setModal(!modal)
        }}
        >
            Close
        </p>
        {component}
    </div>
  )
}

export default Modal