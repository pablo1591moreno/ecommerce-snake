import { useState, useEffect } from 'react';
import SeccionMasVendidos from './MasVendidos';
import { db } from '../../Utils/Firebase';
import { collection, getDocs } from 'firebase/firestore';

function MasVendidos() {
  const [masVendidos, setMasVendidos] = useState([]);

  useEffect(() => {
    const getMasVendidos = async () => {
      try {
        const queryRef = collection(db, 'data');
        const response = await getDocs(queryRef);
        const data = response.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const shuffledData = shuffle(data);
        const masVendidos = shuffledData.slice(0, 5);
        setMasVendidos(masVendidos);
      } catch (error) {
        console.error(error);
      }
    };
    getMasVendidos();
  }, []);

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return <SeccionMasVendidos masVendidos={masVendidos} />;
}

export default MasVendidos;
