import React, { useState } from 'react';
import Modal from './Modal';

const CardImage = (props) => {
  const [showModal , setShowModal] = useState(false)

    const {urlImage , subTitle , paragraph, modalText, textModal } = props

    return (
            <div>
                <img src={urlImage} alt="Sin imagen" className="portfolioCardImage" />
                <div className="portfolioCardsItemBody">
                    <h4> {subTitle} </h4>
                    <p> {paragraph}</p>
                    <button onClick={()=>setShowModal(true)}>Ver más</button>
                    {/* Modal 1 */}
                    <Modal 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    modalText={modalText}
                    textModal={textModal}
                    />
                </div>
            </div>
    )
}

export default CardImage;

// 