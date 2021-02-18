import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CardImage from './components/CardImages';
import WorkExp from './components/Workexperience';
import Contacts from './components/Contacts'
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <main>

        <CardImage />

        {/* Sección de tabla de experiencia */}
        <WorkExp />

        {/* Datos de Contacto */}
        <Contacts />
      </main>

      {/* Sección de pié de página */}
      <Footer />
      <Copyright />


    </>
  )
}
export default App;
