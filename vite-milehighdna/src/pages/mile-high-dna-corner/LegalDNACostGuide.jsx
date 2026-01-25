import { useEffect } from 'react';

const LegalDNACostGuide = () => {
  useEffect(() => {
    window.location.replace('/guides/legal-dna-test-cost');
  }, []);

  return null;
};

export default LegalDNACostGuide;
