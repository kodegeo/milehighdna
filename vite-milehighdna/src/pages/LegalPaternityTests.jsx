import { useEffect } from 'react';

const LegalPaternityTests = () => {
  useEffect(() => {
    window.location.replace('/services/legal-paternity-testing');
  }, []);

  return null;
};

export default LegalPaternityTests;
