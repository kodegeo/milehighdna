// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import TopNavigation from './components/TopNavigation';
import TopNavigationEs from './components/es/TopNavigationEs';
import NavigationEs from './components/es/NavigationEs';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import LegalPaternityTests from './pages/LegalPaternityTests';
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

// Spanish imports
import HomePageEs from './pages/es/HomePageEs';
import AboutUsEs from './pages/es/AboutUsEs';
import LegalPaternityTestsEs from './pages/es/LegalPaternityTestsEs';
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

import './styles/global.css';

function AppLayout() {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith('/es');

  return (
    <div className="min-h-screen flex flex-col">
      {isSpanish ? <TopNavigationEs /> : <TopNavigation />}
      {isSpanish ? <NavigationEs /> : <Navigation />}
      <main className="flex-grow">
      <Routes>
            {/* English Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/legal-paternity-tests" element={<LegalPaternityTests />} />
            <Route path="/immigration-dna-tests" element={<ImmigrationDNATests />} />
            <Route path="/grandparentage-dna-tests" element={<GrandparentagePage />} />
            <Route path="/siblingship-dna-tests" element={<Siblingship />} />
      
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

            {/* Spanish Routes */}
            <Route path="/es" element={<HomePageEs />} />
            <Route path="/es/sobre-nosotros" element={<AboutUsEs />} />
            <Route path="/es/prueba-de-paternidad-legal" element={<LegalPaternityTestsEs />} />
            <Route path="/es/prueba-de-inmigracion" element={<ImmigrationDNATestsEs />} />
            <Route path="/es/prueba-de-abuelidad" element={<GrandparentageTestsEs />} />
            <Route path="/es/prueba-de-hermanos" element={<SiblingshipEs />} />
            <Route path="/es/programar-cita" element={<AppointmentsEs />} />
            <Route path="/es/preguntas-frecuentes" element={<FAQEs />} />
            <Route path="/es/consultar-resultados" element={<GetResultsEs />} />
            <Route path="/es/restablecer-contrasena" element={<ResetPasswordEs />} />
            <Route path="/es/admin-uploader" element={<AdminUploaderPageEs />} />  {/* unchanged */}
            <Route path="/es/mis-resultados" element={<MyResultsEs />} />
            <Route path="/es/pagina-de-resultados" element={<MyResultsPageEs />} />
            <Route path="/es/reservar-cita" element={<BookAppointmentEs />} />
            <Route path="/es/aabb-accreditation" element={<AABBAccreditationEs />} />  {/* unchanged */}            {/* Spanish Fallback Route */}
            <Route path="/es/*" element={<Navigate to="/es" replace />} />
          </Routes>

      </main>
    </div>
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
