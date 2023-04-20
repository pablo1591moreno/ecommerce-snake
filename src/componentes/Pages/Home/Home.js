import React from 'react';
import Seccion1 from '../../Seccion1/Seccion1';
import SeccionMarcas from '../../SeccionMarcas/SeccionMarcas';
import SeccionUltimosIngresos from '../../SeccionUltimosIngresos/SeccionUltimosIngresos';
import SeccionMasVendidos from '../../SeccionMasVendidos/SeccionMasVendidos'
import SeccionCategorias from '../../SeccionCategorias/SeccionCategorias'
import Footer from '../../Footer/Footer';

function Home() {
  return (
    <>
      <Seccion1 />
      <SeccionMarcas />
      <SeccionUltimosIngresos/>
      <SeccionMasVendidos/>
      <SeccionCategorias/>
      <Footer />
    </>
  );
}

export default Home;