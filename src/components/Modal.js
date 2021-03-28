import React from 'react';

const Modal = (props) => {

    const { showModal, setShowModal, modalText, textModal, modalId } = props;

    const hideModal = (e) => {
        const modal = document.getElementById(e.target.id);
        if (modal && modal.contains(e.target)) {
            modal.style.display = "none"
        }
    }

   

    return (
        <div id={modalId} className="close" onClick={hideModal}>
            <div className={showModal === true ? 'modal' : 'none-modal'} >
                <div className="modalContent">
                    <span className="close" onClick={() => setShowModal(false)}>×</span>
                    <p>{modalText}</p>
                    <p>{textModal}</p>
                </div>
            </div>
        </div>
    )
}

export default Modal;