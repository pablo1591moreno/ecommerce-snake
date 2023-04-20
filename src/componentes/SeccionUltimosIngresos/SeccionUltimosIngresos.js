import { useState, useEffect } from 'react';
import SeccionUltimosIngresos from './UltimosIngresos';
import { db } from '../../Utils/Firebase';
import { collection, getDocs } from 'firebase/firestore';

function UltimosIngresos() {
  const [ultimosIngresos, setUltimosIngresos] = useState([]);

  useEffect(() => {
    const getUltimosIngresos = async () => {
      try {
        const queryRef = collection(db, 'data');
        const response = await getDocs(queryRef);
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const ultimosIngresos = data.slice(-5);
        setUltimosIngresos(ultimosIngresos);
      } catch (error) {
        console.error(error);
      }
    };
    getUltimosIngresos();
  }, []);

  return <SeccionUltimosIngresos ingresos={ultimosIngresos} />;
}

export default UltimosIngresos;