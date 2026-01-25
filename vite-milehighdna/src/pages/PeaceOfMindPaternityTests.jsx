import { useEffect } from 'react';

const PeaceOfMindPaternityPage = () => {
  useEffect(() => {
    window.location.replace('/services/non-legal-paternity-testing');
  }, []);

  return null;
};

export default PeaceOfMindPaternityPage;
