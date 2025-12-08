// src/App.jsx
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Already have HelmetProvider in main.jsx
import './styles/global.css';
import GTMPageView from './components/GTMPageView';

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import TopNavigation from './components/TopNavigation';
import TopNavigationEs from './components/es/TopNavigationEs';
import NavigationEs from './components/es/NavigationEs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LegalPaternityTests from './pages/LegalPaternityTests';
import PeaceOfMindPaternityTests from './pages/PeaceOfMindPaternityTests';
import ImmigrationDNATests from './pages/ImmigrationDNATests';
import GrandparentagePage from './pages/GrandparentageTests';
import Siblingship from './pages/Siblingship';
import Appointments from './pages/Appointments';
import FAQ from './pages/FAQ';
import GetResults from './pages/GetResults';
import ResetPassword from './pages/ResetPassword';
import AdminDashboard from './components/getResults/AdminDashboard';
import AdminUploaderPage from './pages/AdminUploaderPage';
import MyResults from './pages/MyResults';
import MyResultsPage from './pages/MyResultsPage';
import BookAppointment from './pages/BookAppointment';
import AABBAccreditation from './pages/AABBAccreditation';
import AppointmentFormPage from './pages/AppointmentFormPage';
import AppointmentWizard from './pages/AppointmentWizard';
import Prenatal from './pages/Prenatal';
import DNATestingDenverPage from './pages/DNATestingDenverPage';
import Services from './pages/Services';
import DiscreetDNATesting from './pages/DiscreetDNATesting';
import ForensicDNAAnalysis from './pages/ForensicDNAAnalysis';
import CheckoutDomestic from './pages/CheckoutDomestic';
import CheckoutInternational from './pages/CheckoutInternational';
import PeaceOfMindDNAKit from './pages/PeaceOfMindDNAKit';
import Confirmation from './pages/Confirmation';
import FamilyRelationshipDNA from './pages/FamilyRelationshipDNA';
import MileHighDNACorner from './pages/MileHighDNACorner';
import PrenatalDNACost from './pages/mile-high-dna-corner/PrenatalDNACost';
import PrenatalDNAGuide from './pages/mile-high-dna-corner/PrenatalDNAGuide';
import DNATestingTypes from './pages/DNATestingTypes';
import LegalVsNonLegal from './pages/mile-high-dna-corner/LegalVsNonLegal';
import HomeDNATestAccuracy from './pages/mile-high-dna-corner/HomeDNATestAccuracy';
import AnswersMatterMost from './pages/mile-high-dna-corner/AnswersMatterMost';
import WhatToExpectNIPP from './pages/mile-high-dna-corner/WhatToExpectNIPP';
import BestAtHomePaternityDNAKit from './pages/mile-high-dna-corner/BestAtHomePaternityDNAKit';
import BilingualDNATestingDenver from './pages/mile-high-dna-corner/BilingualDNATestingDenver';
import LegalDNACostGuide from './pages/mile-high-dna-corner/LegalDNACostGuide';
import NonLegalDNACostGuide from './pages/mile-high-dna-corner/NonLegalDNACostGuide';
import NotFound from './pages/NotFound';

// Location pages
import LocationsIndex from './pages/locations/index';
import Denver from './pages/locations/denver';
import Aurora from './pages/locations/aurora';
import Lakewood from './pages/locations/lakewood';
import Littleton from './pages/locations/littleton';
import Centennial from './pages/locations/centennial';
import Englewood from './pages/locations/englewood';
import Arvada from './pages/locations/arvada';
import Westminster from './pages/locations/westminster';
import Thornton from './pages/locations/thornton';
import Boulder from './pages/locations/boulder';
import Longmont from './pages/locations/longmont';
import FortCollins from './pages/locations/fort-collins';
import Loveland from './pages/locations/loveland';
import Greeley from './pages/locations/greeley';
import ColoradoSprings from './pages/locations/colorado-springs';
import Pueblo from './pages/locations/pueblo';


// Spanish imports
import HomePageEs from './pages/es/HomePageEs';
import AboutUsEs from './pages/es/AboutUsEs';
import LegalPaternityTestsEs from './pages/es/LegalPaternityTestsEs';
import PeaceOfMindPaternityTestsEs from './pages/es/PeaceOfMindPaternityTestsEs';
import ImmigrationDNATestsEs from './pages/es/ImmigrationDNATestsEs';
import GrandparentageTestsEs from './pages/es/GrandparentageTestsEs';
import SiblingshipEs from './pages/es/SiblingshipEs';
import AppointmentsEs from './pages/es/AppointmentsEs';
import FAQEs from './pages/es/FAQEs';
import GetResultsEs from './pages/es/GetResultsEs';
import ResetPasswordEs from './pages/es/ResetPasswordEs';
import AdminUploaderPageEs from './pages/es/AdminUploaderPageEs';
import MyResultsEs from './pages/es/MyResultsEs';
import MyResultsPageEs from './pages/es/MyResultsPageEs';
import BookAppointmentEs from './pages/es/BookAppointmentEs';
import AABBAccreditationEs from './pages/es/AABBAccreditationEs';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import TestAdmin from './pages/TestAdmin';
import PrenatalEs from './pages/es/PrenatalEs';

function AppLayout() {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith('/es');

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {isSpanish ? <TopNavigationEs /> : <TopNavigation />}
        {isSpanish ? <NavigationEs /> : <Navigation />}
  
        <main className="flex-grow">
          <GTMPageView />
          <Routes>
            {/* English Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/legal-paternity-tests" element={<LegalPaternityTests />} />
            <Route path="/peace-of-mind-paternity-tests" element={<PeaceOfMindPaternityTests />} />
            <Route path="/immigration-dna-tests" element={<ImmigrationDNATests />} />
            <Route path="/grandparentage-dna-tests" element={<GrandparentagePage />} />
            <Route path="/siblingship-dna-tests" element={<Siblingship />} />
            <Route path="/prenatal-dna-test" element={<Prenatal />} />
  
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/get-results" element={<GetResults />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/admin-uploader" element={<AdminUploaderPage />} />
            <Route path="/my-results" element={<MyResults />} />
            <Route path="/my-results-page" element={<MyResultsPage />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/aabb-accreditation" element={<AABBAccreditation />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/success" element={<Success />} />
            <Route path="/appointment-form" element={<AppointmentFormPage />} />
            <Route path="/appointment-wizard" element={<AppointmentWizard />} />
            <Route path="/test-admin" element={<TestAdmin />} />
            <Route path="/dna-testing-denver" element={<DNATestingDenverPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/discreet-dna-testing" element={<DiscreetDNATesting />} />
            <Route path="/forensic-dna-analysis" element={<ForensicDNAAnalysis />} />
            <Route path="/checkout-domestic" element={<CheckoutDomestic />} />
            <Route path="/checkout-international" element={<CheckoutInternational />} />
            <Route path="/products/peace-of-mind-dna-kit" element={<PeaceOfMindDNAKit />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/family-relationship-dna" element={<FamilyRelationshipDNA />} />
            <Route path="/mile-high-dna-corner" element={<MileHighDNACorner />} />
            <Route path="/mile-high-dna-corner/prenatal-dna-cost-guide" element={<PrenatalDNAGuide />} />
            <Route path="/mile-high-dna-corner/how-much-does-a-prenatal-dna-test-cost" element={<PrenatalDNACost />} />
            <Route path="/dna-testing-types" element={<DNATestingTypes />} />
            <Route path="/mile-high-dna-corner/legal-vs-non-legal-dna-test" element={<LegalVsNonLegal />} />
            <Route path="/mile-high-dna-corner/how-reliable-and-accurate-are-home-dna-tests" element={<HomeDNATestAccuracy />} />
            <Route path="/mile-high-dna-corner/family-relationship-dna-testing-denver" element={<AnswersMatterMost />} />
            <Route path="/mile-high-dna-corner/what-to-expect-non-invasive-prenatal-dna-test-denver" element={<WhatToExpectNIPP />} />
            <Route path="/mile-high-dna-corner/best-at-home-paternity-dna-kit-denver" element={<BestAtHomePaternityDNAKit />} />
            <Route path="/mile-high-dna-corner/why-bilingual-dna-testing-matters-denver" element={<BilingualDNATestingDenver />} />
            <Route path="/mile-high-dna-corner/legal-dna-cost-guide" element={<LegalDNACostGuide />} />
            <Route path="/mile-high-dna-corner/non-legal-dna-cost-guide" element={<NonLegalDNACostGuide />} />
  
            {/* Location Pages */}
            <Route path="/locations" element={<LocationsIndex />} />
            <Route path="/locations/denver" element={<Denver />} />
            <Route path="/locations/aurora" element={<Aurora />} />
            <Route path="/locations/lakewood" element={<Lakewood />} />
            <Route path="/locations/littleton" element={<Littleton />} />
            <Route path="/locations/centennial" element={<Centennial />} />
            <Route path="/locations/englewood" element={<Englewood />} />
            <Route path="/locations/arvada" element={<Arvada />} />
            <Route path="/locations/westminster" element={<Westminster />} />
            <Route path="/locations/thornton" element={<Thornton />} />
            <Route path="/locations/boulder" element={<Boulder />} />
            <Route path="/locations/longmont" element={<Longmont />} />
            <Route path="/locations/fort-collins" element={<FortCollins />} />
            <Route path="/locations/loveland" element={<Loveland />} />
            <Route path="/locations/greeley" element={<Greeley />} />
            <Route path="/locations/colorado-springs" element={<ColoradoSprings />} />
            <Route path="/locations/pueblo" element={<Pueblo />} />
  
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
  
            {/* Spanish Routes */}
            <Route path="/es" element={<HomePageEs />} />
            <Route path="/es/sobre-nosotros" element={<AboutUsEs />} />
            <Route path="/es/prueba-de-paternidad-legal" element={<LegalPaternityTestsEs />} />
            <Route path="/es/prueba-paternidad-tranquilidad" element={<PeaceOfMindPaternityTestsEs />} />
            <Route path="/es/prueba-de-inmigracion" element={<ImmigrationDNATestsEs />} />
            <Route path="/es/prueba-de-abuelidad" element={<GrandparentageTestsEs />} />
            <Route path="/es/prueba-de-hermanos" element={<SiblingshipEs />} />
            <Route path="/es/programar-cita" element={<AppointmentsEs />} />
            <Route path="/es/preguntas-frecuentes" element={<FAQEs />} />
            <Route path="/es/consultar-resultados" element={<GetResultsEs />} />
            <Route path="/es/restablecer-contrasena" element={<ResetPasswordEs />} />
            <Route path="/es/admin-uploader" element={<AdminUploaderPageEs />} />
            <Route path="/es/mis-resultados" element={<MyResultsEs />} />
            <Route path="/es/pagina-de-resultados" element={<MyResultsPageEs />} />
            <Route path="/es/reservar-cita" element={<BookAppointmentEs />} />
            <Route path="/es/aabb-accreditation" element={<AABBAccreditationEs />} />
            <Route path="/es/prueba-de-paternidad-prenatal" element={<PrenatalEs />} />
          </Routes>
        </main>
      </div>
    </>
  );
  
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppLayout />
    </Router>
    
  );
}

export default App;
