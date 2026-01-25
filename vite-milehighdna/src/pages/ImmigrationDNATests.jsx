import { useEffect } from 'react';

const ImmigrationDNATests = () => {
  useEffect(() => {
    window.location.replace('/services/immigration-dna-testing');
  }, []);

  return null;
};

export default ImmigrationDNATests;
