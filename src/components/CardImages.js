import React from 'react';
import Executive1 from '../assets/executive1.png';

const CardImage = () => {
  return (
    <div className="cardSection">
      <h1 className="servers"> servicios </h1>

      <div className="cardImgCenter">
        <div>
          <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-72946,msid-77802791/outlook-2-istock.jpg" alt="Sin imagen" className="portfolioCardImage"/>
          <div className="portfolioCardsItemBody">
            <h4> Detección del problema </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti
                  sapiente alias eaque quod nostrum eligendi officia rem illo? </p>
            <button id="btnModal1"> Ver más </button>
            {/* Modal */}
            <div id="modal1" className="modal">
              {/* Contenido Modal */}
              <div className="modalContent">
                <span className="close" id="closeModal1">×</span>
                <p>Modal 1</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit
                itaque perspiciatis pariatur quisquam. Ea odit asperiores quam? Pariatur nesciunt
                voluptates recusandae aspernatur reprehenderit, blanditiis ipsum mollitia suscipit
                  commodi.</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <img src={Executive1} alt=" Sin imagen " className="portfolioCardImage" />
          <div className="portfolioCardsItemBody">
            <h4> propuesta de valor </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti
                  sapiente alias eaque quod nostrum eligendi officia rem illo? </p>
            <button id="btnModal2"> Ver más </button>
            {/* Modal */}
            <div id="modal2" className="modal">
              {/* Contenido Modal */}
              <div className="modalContent">
                <span className="close" id="closeModal2">×</span>
                <p>Modal 2</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit
                itaque perspiciatis pariatur quisquam. Ea odit asperiores quam? Pariatur nesciunt
                voluptates recusandae aspernatur reprehenderit, blanditiis ipsum mollitia suscipit
                  commodi.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://www.vippng.com/png/full/105-1059606_handshake-clipart-mutual-agreement-business-partner-clipart-png.png" alt=" Sin imagen " className="portfolioCardImage" />
          <div className="portfolioCardsItemBody">
            <h4> Compromiso y respuesta </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti
                  sapiente alias eaque quod nostrum eligendi officia rem illo? </p>
            <button id="btnModal3"> Ver más </button>
            {/* Modal */}
            <div id="modal3" className="modal">
              {/* Contenido Modal */}
              <div className="modalContent">
                <span className="close" id="closeModal3">×</span>
                <p>Modal 3</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit
                itaque perspiciatis pariatur quisquam. Ea odit asperiores quam? Pariatur nesciunt
                voluptates recusandae aspernatur reprehenderit, blanditiis ipsum mollitia suscipit
                  commodi.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pBAyVLBxHu-XM5Bh4djbcDunQr2DCEibaw&usqp=CAU" alt=" Sin imagen " className="portfolioCardImage" />
          <div className="portfolioCardsItemBody">
            <h4> Servicio al Cliente 24/7 </h4>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti
                  sapiente alias eaque quod nostrum eligendi officia rem illo? </p>
            <button id="btnModal4"> Ver más </button>
            {/* Modal */}
            <div id="modal4" className="modal">
              {/* Contenido Modal */}
              <div className="modalContent">
                <span className="close" id="closeModal4">×</span>
                <p>Modal 4</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laboriosam suscipit
                itaque perspiciatis pariatur quisquam. Ea odit asperiores quam? Pariatur nesciunt
                voluptates recusandae aspernatur reprehenderit, blanditiis ipsum mollitia suscipit
                  commodi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardImage