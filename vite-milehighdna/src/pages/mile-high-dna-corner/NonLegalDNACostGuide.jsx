import { useEffect } from 'react';

const NonLegalDNACostGuide = () => {
  useEffect(() => {
    window.location.replace('/guides/non-legal-dna-test-cost');
  }, []);

  return null;
};

export default NonLegalDNACostGuide;
