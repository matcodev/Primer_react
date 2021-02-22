import React from 'react';
import Executive1 from '../assets/executive1.png';
import CardImage from './CardImage';

const CardImages = () => {
  return (
    <div className="cardSection">
      <h1 className="servers"> servicios </h1>

      <div className="cardImgCenter">
        <CardImage 
        urlImage = "https://m.economictimes.com/thumb/height-450,width-600,imgsize-72946,msid-77802791/outlook-2-istock.jpg"
        subTitle =  'Detección del problema'
        paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti sapiente alias eaque quod nostrum eligendi officia rem illo?'
        modalText = 'Modal 1'
        textModal = 'Text Modal 1'
        />
        <CardImage 
        urlImage = {Executive1}
        subTitle =  'propuesta de valor'
        paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti sapiente alias eaque quod nostrum eligendi officia rem illo?'
        modalText = 'Modal 2'
        textModal = 'Text Modal 2'
        />
        <CardImage 
        urlImage = "https://www.vippng.com/png/full/105-1059606_handshake-clipart-mutual-agreement-business-partner-clipart-png.png"
        subTitle =  'Compromiso y respuesta'
        paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti sapiente alias eaque quod nostrum eligendi officia rem illo?'
        modalText = 'Modal 3'
        textModal = 'Text Modal 3'
        />
        <CardImage 
        urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9pBAyVLBxHu-XM5Bh4djbcDunQr2DCEibaw&usqp=CAU"
        subTitle =  'Servicio al Cliente 24/7'
        paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae reprehenderit corrupti sapiente alias eaque quod nostrum eligendi officia rem illo?'
        modalText = 'Modal 4'
        textModal = 'Text Modal 4'
        />
      </div>
    </div>
  )
}
export default CardImages;