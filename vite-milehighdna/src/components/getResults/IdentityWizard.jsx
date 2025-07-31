// IdentityWizard.jsx
import React, { useState, useEffect } from 'react';
import SignaturePad from 'react-signature-canvas';
import heic2any from 'heic2any';
import logoImage from '../../assets/images/milehigh-dna-logo.png';

const formatFileName = (customerCode, firstName = '', lastName = '', date = new Date()) => {
  const mmddyyyy = `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}${date.getFullYear()}`;
  const cleanFirst = (firstName || '').trim().replace(/\s+/g, '_') || 'Unknown';
  const cleanLast = (lastName || '').trim().replace(/\s+/g, '_') || 'Unknown';
  return `${customerCode}-${cleanFirst}_${cleanLast}-${mmddyyyy}.jpg`;
};

const IdentityWizard = ({ customerData, onComplete }) => {
  const [step, setStep] = useState(0);
  const [customer, setCustomer] = useState({
    customer_code: customerData?.customer_code || 'MH123ABC',
    photo: null,
    photoPreview: '',
    role: '',
    fullName: customerData ? `${customerData.first_name} ${customerData.last_name}` : '',
    dob: customerData?.date_of_birth || '',
    signatureMethod: 'after',
    signatureData: ''
  });
  const [collector, setCollector] = useState({
    name: '',
    signatureData: '',
    signatureMethod: 'after'
  });
  const [participants, setParticipants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sigPad, setSigPad] = useState(null);
  const [errors, setErrors] = useState({});
  const [pdfUrl, setPdfUrl] = useState('');
  const [generatingPdf, setGeneratingPdf] = useState(false);

  // Initialize participants based on customer data
  useEffect(() => {
    if (customerData && customerData.participant_count) {
      const participantCount = parseInt(customerData.participant_count) || 1;
      const initialParticipants = Array.from({ length: participantCount }, () => ({
        photo: null,
        photoPreview: '',
        role: '',
        fullName: '',
        dob: '',
        guardianName: '',
        guardianSignatureData: ''
      }));
      setParticipants(initialParticipants);
    }
  }, [customerData]);

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      const participant = participants[currentIndex];
      if (!participant.fullName.trim()) newErrors.participantName = 'Full name is required';
      if (!participant.role.trim()) newErrors.participantRole = 'Role is required';
      if (!participant.dob) newErrors.participantDob = 'Date of birth is required';
      if (!participant.photo) newErrors.participantPhoto = 'ID photo is required';
      const isMinor = participant.dob && new Date().getFullYear() - new Date(participant.dob).getFullYear() < 18;
      if (isMinor && !participant.guardianName.trim()) newErrors.guardianName = 'Guardian name is required for minors';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };      

  const addParticipant = () => {
    // ✅ Only require DOB for customer before proceeding
    if (!customer.dob) {
      setErrors({ customerDob: 'Date of birth is required' });
      return;
    }
  
    // Go to Step 1 (participants)
    setStep(1);
  };
    
  // Helper function to convert HEIC to JPEG
  const convertHeicToJpeg = async (file) => {
    console.log('Processing file:', file.name, 'Type:', file.type);
    
    // Check if it's a HEIC file by multiple methods
    const isHeic = file.type === 'image/heic' || 
                   file.type === 'image/heif' || 
                   file.name.toLowerCase().endsWith('.heic') ||
                   file.name.toLowerCase().endsWith('.heif');
    
    if (isHeic) {
      console.log('Converting HEIC file to JPEG...');
      try {
        const convertedBlob = await heic2any({
          blob: file,
          toType: 'image/jpeg',
          quality: 0.8
        });
        const convertedFile = new File([convertedBlob], file.name.replace(/\.(heic|heif)$/i, '.jpg'), {
          type: 'image/jpeg'
        });
        console.log('HEIC conversion successful:', convertedFile.name);
        return convertedFile;
      } catch (error) {
        console.error('Error converting HEIC file:', error);
        throw new Error('Failed to convert HEIC file. Please try a different image format.');
      }
    }
    console.log('File does not need conversion');
    return file;
  };

  const handlePhotoUpload = async (e, type = 'customer') => {
    const file = e.target.files[0];
    if (!file) return;
    
    console.log('Uploading photo for:', type, 'File:', file.name, 'Type:', file.type);
    
    try {
      // Convert HEIC to JPEG if needed
      const processedFile = await convertHeicToJpeg(file);
      const preview = URL.createObjectURL(processedFile);
      
      // Generate filename safely
      let firstName = '';
      let lastName = '';
      
      if (type === 'customer') {
        const nameParts = customer.fullName.split(' ');
        firstName = nameParts[0] || '';
        lastName = nameParts[1] || '';
      } else {
        if (currentIndex === undefined || currentIndex >= participants.length) {
          console.error('Invalid currentIndex:', currentIndex, 'participants.length:', participants.length);
          setErrors(prev => ({ ...prev, participantPhoto: 'Invalid participant index. Please try again.' }));
          return;
        }
        const nameParts = participants[currentIndex]?.fullName?.split(' ') || [];
        firstName = nameParts[0] || '';
        lastName = nameParts[1] || '';
      }
      
      const fileName = formatFileName(customer.customer_code, firstName, lastName);
      const updatedFile = new File([processedFile], fileName, { type: processedFile.type });

      console.log('File processed successfully:', updatedFile.name);

      if (type === 'customer') {
        setCustomer(prev => ({ ...prev, photo: updatedFile, photoPreview: preview }));
        setErrors(prev => ({ ...prev, customerPhoto: undefined }));
        console.log('Customer photo uploaded successfully');
      } else {
        const updated = [...participants];
        updated[currentIndex].photo = updatedFile;
        updated[currentIndex].photoPreview = preview;
        setParticipants(updated);
        setErrors(prev => ({ ...prev, participantPhoto: undefined }));
        console.log('Participant photo uploaded successfully for index:', currentIndex);
      }
    } catch (error) {
      console.error('Error in handlePhotoUpload:', error);
      // Show error to user
      if (type === 'customer') {
        setErrors(prev => ({ ...prev, customerPhoto: error.message }));
      } else {
        setErrors(prev => ({ ...prev, participantPhoto: error.message }));
      }
    }
  };

  const handleSignatureCapture = (type = 'customer') => {
    const dataUrl = sigPad?.getTrimmedCanvas().toDataURL();
    if (type === 'customer') {
      setCustomer(prev => ({ ...prev, signatureData: dataUrl }));
    } else if (type === 'collector') {
      setCollector(prev => ({ ...prev, signatureData: dataUrl }));
    } else {
      const updated = [...participants];
      updated[currentIndex].guardianSignatureData = dataUrl;
      setParticipants(updated);
    }
  };

  const nextParticipant = () => {
    if (!validateStep(1)) return;
    if (currentIndex + 1 < participants.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStep(2);
    }
  };

  const addAnotherParticipant = () => {
    if (!validateStep(1)) return;
    
    const newParticipant = {
      photo: null,
      photoPreview: '',
      role: '',
      fullName: '',
      dob: '',
      guardianName: '',
      guardianSignatureData: ''
    };
    
    setParticipants([...participants, newParticipant]);
    setCurrentIndex(participants.length);
  };

// Updated IdentityWizard.jsx with clean legal PDF generation
// ... existing imports, state, and functions remain unchanged ...

const generatePDF = async () => {
  setGeneratingPdf(true);
  const logoBase64 = await fetchImageAsBase64(logoImage);

  try {
    const customerPhotoBase64 = customer.photoPreview ? await fileToBase64(customer.photo) : '';
    const dateNow = new Date().toLocaleDateString();

    // Customer Page
    const customerPage = `
      <div class="participant-section">
        <div class="page-header">
          <img src="${logoBase64}" class="logo-image" alt="Logo" />
          <h1 class="header-title">Legal DNA Identity Confirmation</h1>
        </div>
        <div class="photo-container">
          ${customerPhotoBase64 ? `<img src="${customerPhotoBase64}" class="id-photo" />` : '<div class="id-photo-placeholder">No ID Uploaded</div>'}
        </div>
        <div class="info-section">
          <p><strong>Name:</strong> ${customer.fullName}</p>
          <p><strong>Customer Code:</strong> ${customer.customer_code}</p>
          <p><strong>Test Type:</strong> ${customer.role}</p>
          <p><strong>Date of Birth:</strong> ${customer.dob || 'Not provided'}</p>
        </div>
        <div class="page-footer">Report generated by Mile High DNA Testing – ${new Date().toLocaleString()}</div>
      </div>`;

    // Participant Pages
    const participantPages = await Promise.all(participants.map(async (participant) => {
      const photoBase64 = participant.photoPreview ? await fileToBase64(participant.photo) : '';
      const isMinor = participant.dob && new Date().getFullYear() - new Date(participant.dob).getFullYear() < 18;
      return `
        <div class="participant-section">
          <div class="page-header">
            <img src="${logoBase64}" class="logo-image" alt="Logo" />
            <h1 class="header-title">Legal DNA Identity Confirmation</h1>
          </div>
          <div class="photo-container">
            ${photoBase64 ? `<img src="${photoBase64}" class="id-photo" />` : '<div class="id-photo-placeholder">No Photo Provided</div>'}
          </div>
          <div class="info-section">
            <p><strong>${isMinor ? 'Full Name (Guardian)' : 'Full Name'}:</strong> ${isMinor ? participant.guardianName : participant.fullName}</p>
            <p><strong>Role in Test:</strong> ${participant.role}</p>
            <p><strong>Date:</strong> ${dateNow}</p>
            <p style="margin-top:40px;"><strong>${isMinor ? 'Guardian Signature' : 'Signature'}:</strong> ___________________________</p>
          </div>
          <div class="page-footer">Report generated by Mile High DNA Testing – ${new Date().toLocaleString()}</div>
        </div>`;
    }));

    // Collector Page
    const collectorPage = `
      <div class="participant-section">
        <div class="page-header">
          <img src="${logoBase64}" class="logo-image" alt="Logo" />
          <h1 class="header-title">Sample Collection</h1>
        </div>
        <div class="info-section">
          <p><strong>Collector Name:</strong> ${collector.name || 'Not provided'}</p>
          <p style="margin-top:40px;"><strong>Collector Signature:</strong> ___________________________</p>
        </div>
        <div class="page-footer">Report generated by Mile High DNA Testing – ${new Date().toLocaleString()}</div>
      </div>`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Legal DNA Identity Confirmation</title>
        <style>
          body { font-family: 'Arial', sans-serif; margin: 0; padding: 0; color: #222; }
          .participant-section { page-break-before: always; text-align: center; padding: 40px; }
          .page-header { text-align: center; border-bottom: 2px solid #ccc; padding-bottom: 10px; margin-bottom: 20px; }
          .logo-image { height: 60px; }
          .header-title { font-size: 20px; margin: 10px 0; color: #2c6fa6; }
          .photo-container { margin: 30px auto; }
          .id-photo { width: 250px; height: auto; border: 2px solid #ccc; border-radius: 8px; }
          .id-photo-placeholder { width: 250px; height: 250px; border: 2px dashed #ccc; display: flex; align-items: center; justify-content: center; color: #999; margin: auto; }
          .info-section { margin-top: 30px; font-size: 16px; text-align: left; max-width: 400px; margin-left: auto; margin-right: auto; }
          .info-section p { margin: 12px 0; }
          .page-footer { text-align: center; font-size: 12px; color: #888; margin-top: 50px; border-top: 1px solid #ddd; padding-top: 10px; }
          @media print {
            .participant-section { page-break-before: always; break-before: page; }
          }
        </style>
      </head>
      <body>
        ${customerPage}
        ${participantPages.join('')}
        ${collectorPage}
      </body>
      </html>`;
  
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        const link = document.createElement('a');
        link.href = url;
        link.download = `legal-dna-identity-confirmation-${new Date().toISOString().split('T')[0]}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        setGeneratingPdf(false);
      }
    };
    
  
    const fileToBase64 = (file) => new Promise((resolve) => {
      if (!file) return resolve('');
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  
    const fetchImageAsBase64 = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    };
  
  // Minimal placeholder for signature section
  const renderSignatureSection = (isGuardian = false) => (
    <div className="my-4 p-4 border rounded bg-gray-50 text-center">
      <p className="text-gray-600">Signature section for {isGuardian ? 'guardian' : 'participant'} (coming soon!)</p>
      {/* In the future, add a signature pad here */}
    </div>
  );

  const handleComplete = () => {
    // Here you would typically save the verification data
    console.log('Verification completed:', { customer, participants });
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="p-6 space-y-4">

{step === 0 && (
  <div>
    <h2 className="text-xl font-bold mb-4">Customer Verification</h2>

    {customerData && (
      <div className="bg-blue-50 p-4 rounded mb-4">
        <h3 className="font-semibold text-blue-800 mb-2">Customer Information</h3>
        <p className="text-blue-700">
          <strong>Name:</strong> {customerData.first_name} {customerData.last_name}<br />
          <strong>Customer Code:</strong> {customerData.customer_code}<br />
          <strong>Test Type:</strong> {customerData.test_type}<br />
          <strong>Date of Birth:</strong> {customerData.date_of_birth ? new Date(customerData.date_of_birth).toLocaleDateString() : 'Not provided'}
        </p>
      </div>
    )}

    {/* Optional Customer ID Upload */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Upload ID Photo (optional)</label>
      <p className="text-sm text-gray-600 mb-2">Supports: PNG, JPG, HEIC (iPhone photos will be automatically converted)</p>
      <input type="file" onChange={handlePhotoUpload} accept="image/*,.heic,.heif" />
      {customer.photoPreview && <img src={customer.photoPreview} alt="Preview" className="w-48 mt-2" />}
    </div>

    {/* DOB Required */}
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth <span className="text-red-500">*</span></label>
      <input type="date" className={`w-full border mt-2 p-2 rounded ${errors.customerDob ? 'border-red-500' : ''}`} value={customer.dob} onChange={(e) => {
        setCustomer(prev => ({ ...prev, dob: e.target.value }));
        setErrors(prev => ({ ...prev, customerDob: undefined }));
      }} />
      {errors.customerDob && <p className="text-red-500 text-sm mt-1">{errors.customerDob}</p>}
    </div>

    <button onClick={addParticipant} className="mt-4 px-6 py-2 bg-green-600 text-white rounded">Next: Add Participant</button>
  </div>
)}

      {step === 1 && participants.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">
            Participant {currentIndex + 1} {participants.length > 1 ? `of ${participants.length}` : ''}
            {currentIndex >= (customerData?.participant_count || 1) && (
              <span className="text-sm font-normal text-gray-600 ml-2">(Additional)</span>
            )}
          </h2>
          
          <div className="mb-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Upload ID Photo <span className="text-red-500">*</span>
  </label>
  <p className="text-sm text-gray-600 mb-2">Supports: PNG, JPG, HEIC (iPhone photos will be automatically converted)</p>

  <input
    type="file"
    onChange={(e) => handlePhotoUpload(e, 'participant')}
    accept="image/*,.heic,.heif"
    disabled={!participants[currentIndex]?.fullName?.trim()} // 🔒 disables until name is entered
    className={`${!participants[currentIndex]?.fullName?.trim() ? 'opacity-50 cursor-not-allowed' : ''} ${
      errors.participantPhoto ? 'border-red-500' : ''
    }`}
  />

  {!participants[currentIndex]?.fullName?.trim() && (
    <p className="text-sm text-gray-500 mt-1">
      Please enter the full name before uploading a photo.
    </p>
  )}

  {errors.participantPhoto && (
    <p className="text-red-500 text-sm mt-1">{errors.participantPhoto}</p>
  )}

  {participants[currentIndex].photoPreview && (
    <img
      src={participants[currentIndex].photoPreview}
      alt="Preview"
      className="w-48 mt-2"
    />
  )}
</div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
             Participant Tested <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Participant Type (Alleged Father, Alleged Mother, Alleged Child, etc.)"
              className={`w-full border mt-2 p-2 rounded ${errors.participantRole ? 'border-red-500' : ''}`}
              value={participants[currentIndex].role}
              onChange={(e) => {
                const updated = [...participants];
                updated[currentIndex].role = e.target.value;
                setParticipants(updated);
                setErrors(prev => ({ ...prev, participantRole: undefined }));
              }}
            />
            {errors.participantRole && (
              <p className="text-red-500 text-sm mt-1">{errors.participantRole}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name of the Participant Pictured <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Full Name of the Person in the Picture Above"
              className={`w-full border mt-2 p-2 rounded ${errors.participantName ? 'border-red-500' : ''}`}
              value={participants[currentIndex].fullName}
              onChange={(e) => {
                const updated = [...participants];
                updated[currentIndex].fullName = e.target.value;
                setParticipants(updated);
                setErrors(prev => ({ ...prev, participantName: undefined }));
              }}
            />
            {errors.participantName && (
              <p className="text-red-500 text-sm mt-1">{errors.participantName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className={`w-full border mt-2 p-2 rounded ${errors.participantDob ? 'border-red-500' : ''}`}
              value={participants[currentIndex].dob}
              onChange={(e) => {
                const updated = [...participants];
                updated[currentIndex].dob = e.target.value;
                setParticipants(updated);
                setErrors(prev => ({ ...prev, participantDob: undefined }));
              }}
            />
            {errors.participantDob && (
              <p className="text-red-500 text-sm mt-1">{errors.participantDob}</p>
            )}
          </div>

          {participants[currentIndex].dob && new Date().getFullYear() - new Date(participants[currentIndex].dob).getFullYear() < 18 && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Guardian Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Guardian Name"
                  className={`w-full border mt-2 p-2 rounded ${errors.guardianName ? 'border-red-500' : ''}`}
                  value={participants[currentIndex].guardianName}
                  onChange={(e) => {
                    const updated = [...participants];
                    updated[currentIndex].guardianName = e.target.value;
                    setParticipants(updated);
                    setErrors(prev => ({ ...prev, guardianName: undefined }));
                  }}
                />
                {errors.guardianName && (
                  <p className="text-red-500 text-sm mt-1">{errors.guardianName}</p>
                )}
              </div>
              {renderSignatureSection(true)}
            </>
          )}

          <div className="flex gap-4 mt-6">
            <button
              onClick={nextParticipant}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {currentIndex + 1 === participants.length ? 'Finish' : 'Next Participant'}
            </button>
            
            {/* Add Another Participant button - always show except on the last participant */}
            {currentIndex + 1 === participants.length && (
              <button
                onClick={addAnotherParticipant}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Add Another Participant
              </button>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold">Summary Ready</h2>
          <p className="mt-2">Identity verification data has been collected.</p>
          
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold">Customer:</h3>
            <p>Name: {customer.fullName}</p>
            <p>Role: {customer.role}</p>
            <p>Date of Birth: {customer.dob ? new Date(customer.dob).toLocaleDateString() : 'Not provided'}</p>
            <p>Photo: {customer.photo ? 'Uploaded' : 'Not uploaded'}</p>
            <p>Signature: {customer.signatureData ? 'Captured' : 'Not captured'}</p>
          </div>

          {participants.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold">
                Participants ({participants.length} total):
                {participants.length > (customerData?.participant_count || 1) && (
                  <span className="text-sm font-normal text-gray-600 ml-2">
                    ({customerData?.participant_count || 1} original + {participants.length - (customerData?.participant_count || 1)} additional)
                  </span>
                )}
              </h3>
              {participants.map((participant, index) => (
                <div key={index} className="mt-2 p-2 bg-gray-50 rounded">
                  <p><strong>Participant {index + 1}:</strong> {participant.fullName}</p>
                  <p>Role: {participant.role}</p>
                  <p>Date of Birth: {participant.dob ? new Date(participant.dob).toLocaleDateString() : 'Not provided'}</p>
                  <p>Photo: {participant.photo ? 'Uploaded' : 'Not uploaded'}</p>
                  <p>Signature: {participant.guardianSignatureData ? 'Captured' : 'Not captured'}</p>
                </div>
              ))}
            </div>
          )}

          {/* Collector Information */}
          <div className="mt-6 p-4 bg-blue-50 rounded">
            <h3 className="font-semibold text-blue-800 mb-4">Collector Information</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Collector Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter collector's full name"
                className="w-full border mt-2 p-2 rounded"
                value={collector.name}
                onChange={(e) => setCollector(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Signature Method</label>
              <select
                value={collector.signatureMethod}
                onChange={(e) => setCollector(prev => ({ ...prev, signatureMethod: e.target.value }))}
                className="border rounded px-3 py-2"
              >
                <option value="after">Sign after printout</option>
                <option value="now">Sign now</option>
              </select>
            </div>

            {collector.signatureMethod === 'now' && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Collector Signature</label>
                <SignaturePad
                  ref={ref => setSigPad(ref)}
                  canvasProps={{ width: 400, height: 150, className: 'border rounded' }}
                />
                <button 
                  onClick={() => handleSignatureCapture('collector')} 
                  className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
                >
                  Save Signature
                </button>
              </div>
            )}

            {collector.signatureData && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">Signature captured</p>
                <img src={collector.signatureData} alt="Collector Signature" className="h-8 mt-1" />
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={generatePDF}
              disabled={generatingPdf}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {generatingPdf ? 'Generating...' : 'Generate & Download Report'}
            </button>
            
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                View Report
              </a>
            )}
            
            <button
              onClick={handleComplete}
              className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
              Complete Verification
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default IdentityWizard;
