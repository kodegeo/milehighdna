import { useEffect } from 'react';

const Prenatal = () => {
  useEffect(() => {
    window.location.replace('/services/prenatal-paternity-testing');
  }, []);

  return null;
};

export default Prenatal;
