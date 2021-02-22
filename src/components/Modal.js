import React from 'react';

const Modal = (props) => {
    
    const {showModal , setShowModal, modalText,textModal} = props;
    
    return (
        <div className = {showModal === true ? 'modal' : 'none-modal'} >
             <div className="modalContent">
                <span className="close" id="closeModal1" onClick={()=>setShowModal(false)}>×</span>
                <p>{modalText}</p>
                <p>{textModal}</p>
              </div>
        </div>
    )
}

export default Modal;