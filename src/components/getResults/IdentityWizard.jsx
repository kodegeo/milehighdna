// IdentityWizard.jsx
import React, { useState, useEffect } from 'react';
import SignaturePad from 'react-signature-canvas';
import logoImage from '../../assets/images/milehigh-dna-logo.png'; // Adjust path if needed
import heic2any from 'heic2any';


const formatFileName = (customerCode, firstName, lastName, date = new Date()) => {
  const mmddyyyy = `${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}${date.getFullYear()}`;
  const cleanFirst = firstName.trim().replace(/\s+/g, '_');
  const cleanLast = lastName.trim().replace(/\s+/g, '_');
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
      const initialParticipants = Array.from({ length: participantCount - 1 }, (_, index) => ({
        photo: null,
        photoPreview: '',
        role: '',
        fullName: '',
        dob: '',
        guardianName: '',
        signatureMethod: 'after',
        guardianSignatureData: ''
      }));
      setParticipants(initialParticipants);
    }
  }, [customerData]);

  const validateStep = (stepNumber) => {
    const newErrors = {};
    
    if (stepNumber === 0) {
      // Validate customer step
      if (!customer.fullName.trim()) {
        newErrors.customerName = 'Full name is required';
      }
      if (!customer.role.trim()) {
        newErrors.customerRole = 'Role is required';
      }
      if (!customer.dob) {
        newErrors.customerDob = 'Date of birth is required';
      }
      if (!customer.photo) {
        newErrors.customerPhoto = 'ID photo is required';
      }
    } else if (stepNumber === 1) {
      // Validate participant step
      const participant = participants[currentIndex];
      if (!participant.fullName.trim()) {
        newErrors.participantName = 'Full name is required';
      }
      if (!participant.role.trim()) {
        newErrors.participantRole = 'Role is required';
      }
      if (!participant.dob) {
        newErrors.participantDob = 'Date of birth is required';
      }
      if (!participant.photo) {
        newErrors.participantPhoto = 'ID photo is required';
      }
      
      // Check if participant is under 18 and guardian info is required
      if (participant.dob && new Date().getFullYear() - new Date(participant.dob).getFullYear() < 18) {
        if (!participant.guardianName.trim()) {
          newErrors.guardianName = 'Guardian name is required for participants under 18';
        }
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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

  const addParticipant = () => {
    if (!validateStep(0)) return;
    setParticipants([...participants, {
      photo: null,
      photoPreview: '',
      role: '',
      fullName: '',
      dob: '',
      guardianName: '',
      signatureMethod: 'after',
      guardianSignatureData: ''
    }]);
    setCurrentIndex(participants.length);
    setStep(1);
  };

  const nextParticipant = () => {
    if (!validateStep(1)) return;
    if (currentIndex + 1 < participants.length) setCurrentIndex(currentIndex + 1);
    else setStep(2);
  };

  const generatePDF = async () => {
    setGeneratingPdf(true);
    const logoBase64 = await fetchImageAsBase64(logoImage);

    
    try {
      // Convert photos to base64 for HTML inclusion
      const customerPhotoBase64 = customer.photoPreview ? await fileToBase64(customer.photo) : '';
      
      // Convert participant photos to base64
      const participantPhotosBase64 = await Promise.all(
        participants.map(async (participant) => ({
          ...participant,
          photoBase64: participant.photoPreview ? await fileToBase64(participant.photo) : ''
        }))
      );

      // Create HTML content for PDF
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <title>Identity Confirmation Report</title>
          <style>
            body { font-family: 'Inter', Arial, sans-serif; margin: 0; padding: 0; background: #f7fafd; color: #222; }
            .header {
              display: flex;
              align-items: center;
              background: #eaf3fb;
              padding: 24px 32px 16px 32px;
              border-bottom: 3px solid #2c6fa6;
              box-shadow: 0 2px 8px rgba(44,111,166,0.04);
            }
            .logo-container {
              margin-right: 24px;
              display: flex;
              align-items: center;
            }
            .logo-image {
              height: 56px;
              width: auto;
              display: block;
            }
            .header-title {
              font-size: 2.1rem;
              font-weight: 700;
              color: #2c6fa6;
              letter-spacing: 1px;
            }
            .section {
              background: #fff;
              border-radius: 18px;
              box-shadow: 0 2px 16px rgba(44,111,166,0.07);
              margin: 32px 0 0 0;
              padding: 32px 40px 32px 40px;
              max-width: 700px;
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            .identity-row {
              display: flex;
              gap: 32px;
              align-items: flex-start;
            }
            .id-photo {
              width: 275px;
              height: auto;
              object-fit: cover;
              border-radius: 12px;
              border: 2px solid #eaf3fb;
              box-shadow: 0 1px 6px rgba(44,111,166,0.10);
              background: #f2f6fa;
            }
            .info-table {
              flex: 1;
              display: flex;
              flex-direction: column;
              gap: 10px;
            }
            .info-label {
              font-size: 1rem;
              color: #2c6fa6;
              font-weight: 600;
              margin-bottom: 2px;
            }
            .info-value {
              font-size: 1.08rem;
              color: #222;
              font-weight: 400;
              margin-bottom: 8px;
            }
            .signature-block {
              margin-top: 36px;
              display: flex;
              flex-direction: column;
              gap: 6px;
            }
            .signature-label {
              font-size: 0.98rem;
              color: #888;
              margin-bottom: 25px;
            }
            .signature-line {
              font-size: 1.2rem;
              color: #444;
              letter-spacing: 2px;
              margin-bottom: 2px;
            }
            .section-title {
              font-size: 1.3rem;
              font-weight: 700;
              color: #2c6fa6;
              margin-bottom: 12px;
              border-bottom: 1.5px solid #eaf3fb;
              padding-bottom: 6px;
            }
            .participant-section {
              margin-top: 32px;
            }
            .guardian-block {
              margin-top: 12px;
              background: #ffffff;
              border-radius: 10px;
              padding: 0px;
              box-shadow: 0 1px 4px rgba(44,111,166,0.04);
            }
            .footer {
              text-align: left;
              color: #aaa;
              font-size: 0.95rem;
              margin: 40px 0 0 40px;
              padding-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-container">
      <img src="${logoBase64}" alt="Mile High DNA Logo" class="logo-image" />
            </div>
            <div class="header-title">Identity Confirmation Report</div>
          </div>
          <div class="section">
            <div class="section-title">Customer Identity Confirmation</div>
            <div class="identity-row">
              ${customerPhotoBase64 ? `<img src="${customerPhotoBase64}" alt="Customer ID Photo" class="id-photo" />` : '<div class="id-photo" style="display: flex; align-items: center; justify-content: center; color: #999;">No Photo</div>'}
              <div class="info-table">
                <div><span class="info-label">Pictured to the Left:</span> <span class="info-value">${customer.fullName}</span></div>
                <div><span class="info-label">Role:</span> <span class="info-value">${customer.role}</span></div>
                <div><span class="info-label">Date of Birth:</span> <span class="info-value">${customer.dob}</span></div>
                <div class="signature-block">
                  <span class="signature-label">Signature</span>
                  <span class="signature-line">${customer.signatureData ? `<img src="${customer.signatureData}" alt="Signature" style="height:32px;" />` : '________________________'}</span>
                </div>
              </div>
            </div>
          </div>
          ${participantPhotosBase64.map(participant => `
            <div class="section participant-section">
              <div class="section-title">Participant</div>
              <div class="identity-row">
                ${participant.photoBase64 ? `<img src="${participant.photoBase64}" alt="Participant ID Photo" class="id-photo" />` : '<div class="id-photo" style="display: flex; align-items: center; justify-content: center; color: #999;">No Photo</div>'}
                <div class="info-table">
                  <div><span class="info-label">Pictured to the Left:</span> <span class="info-value">${participant.fullName}</span></div>
                  <div><span class="info-label">Role:</span> <span class="info-value">${participant.role}</span></div>
                  <div><span class="info-label">Date of Birth:</span> <span class="info-value">${participant.dob}</span></div>
                  ${participant.dob && new Date().getFullYear() - new Date(participant.dob).getFullYear() < 18 ? `
                    <div class="guardian-block">
                      <div><span class="info-label">Guardian Name:</span> <span class="info-value">${participant.guardianName || ''}</span></div>
                      <div class="signature-block">
                        <span class="signature-label">Guardian Signature</span>
                        <span class="signature-line">${participant.guardianSignatureData ? `<img src="${participant.guardianSignatureData}" alt="Guardian Signature" style="height:32px;" />` : '________________________'}</span>
                      </div>
                    </div>
                  ` : ''}
                </div>
              </div>
            </div>
          `).join('')}
          
          <!-- Collector Section -->
          <div class="section participant-section">
            <div class="section-title">Sample Collection</div>
            <div class="identity-row">
              <div class="info-table">
                <div><span class="info-label">Collector Name:</span> <span class="info-value">${collector.name || 'Not provided'}</span></div>
                <div class="signature-block">
                  <span class="signature-label">Collector Signature</span>
                  <span class="signature-line">${collector.signatureData ? `<img src="${collector.signatureData}" alt="Collector Signature" style="height:32px;" />` : '________________________'}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="footer">
            Report generated by Mile High DNA Testing &mdash; ${new Date().toLocaleString()}<br/>
            <a href="https://milehighdnatesting.com" style="color: #2c6fa6; text-decoration: underline;">milehighdnatesting.com</a>
          </div>
        </body>
        </html>
      `;

      // Create blob and download
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
      
      // Trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `identity-confirmation-${customer.customer_code}-${new Date().toISOString().split('T')[0]}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setGeneratingPdf(false);
    }
  };

  // Helper function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!file) {
        resolve('');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const fetchImageAsBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
  

  const renderSignatureSection = (isGuardian = false) => (
    <div className="my-4">
      <label className="block text-sm font-medium">Signature Method</label>
      <select
        value={isGuardian ? participants[currentIndex].signatureMethod : customer.signatureMethod}
        onChange={(e) => {
          if (isGuardian) {
            const updated = [...participants];
            updated[currentIndex].signatureMethod = e.target.value;
            setParticipants(updated);
          } else setCustomer(prev => ({ ...prev, signatureMethod: e.target.value }));
        }}
        className="border rounded px-3 py-2"
      >
        <option value="after">Sign after printout</option>
        <option value="now">Sign now</option>
      </select>

                {(isGuardian ? participants[currentIndex].signatureMethod : customer.signatureMethod) === 'now' && (
            <div className="mt-2">
              <SignaturePad
                ref={ref => setSigPad(ref)}
                canvasProps={{ width: 400, height: 150, className: 'border rounded' }}
              />
              <button onClick={() => handleSignatureCapture(isGuardian ? 'participant' : 'customer')} className="mt-2 px-4 py-1 bg-blue-600 text-white rounded">Save Signature</button>
            </div>
          )}
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
          
          {/* Customer Information Display */}
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

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload ID Photo <span className="text-red-500">*</span>
            </label>
            <input 
              type="file" 
              onChange={handlePhotoUpload} 
              accept="image/*,.heic,.heif" 
              className={errors.customerPhoto ? 'border-red-500' : ''}
            />
            <p className="text-sm text-gray-600 mt-1">Supports: JPG, PNG, HEIC (iPhone photos will be automatically converted)</p>
            {errors.customerPhoto && (
              <p className="text-red-500 text-sm mt-1">{errors.customerPhoto}</p>
            )}
            {customer.photoPreview && <img src={customer.photoPreview} alt="Preview" className="w-48 mt-2" />}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Role (e.g. Alleged Father, Mother, Child)"
              className={`w-full border mt-2 p-2 rounded ${errors.customerRole ? 'border-red-500' : ''}`}
              value={customer.role}
              onChange={(e) => {
                setCustomer(prev => ({ ...prev, role: e.target.value }));
                setErrors(prev => ({ ...prev, customerRole: undefined }));
              }}
            />
            {errors.customerRole && (
              <p className="text-red-500 text-sm mt-1">{errors.customerRole}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pictured to the Left <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Pictured to the Left"
              className={`w-full border mt-2 p-2 rounded ${errors.customerName ? 'border-red-500' : ''}`}
              value={customer.fullName}
              onChange={(e) => {
                setCustomer(prev => ({ ...prev, fullName: e.target.value }));
                setErrors(prev => ({ ...prev, customerName: undefined }));
              }}
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className={`w-full border mt-2 p-2 rounded ${errors.customerDob ? 'border-red-500' : ''}`}
              value={customer.dob}
              onChange={(e) => {
                setCustomer(prev => ({ ...prev, dob: e.target.value }));
                setErrors(prev => ({ ...prev, customerDob: undefined }));
              }}
            />
            {errors.customerDob && (
              <p className="text-red-500 text-sm mt-1">{errors.customerDob}</p>
            )}
          </div>

          {renderSignatureSection(false)}

          <button onClick={addParticipant} className="mt-4 px-6 py-2 bg-green-600 text-white rounded">
            Next: Add Participant
          </button>
        </div>
      )}

      {step === 1 && participants.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Participant {currentIndex + 1} of {participants.length}</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload ID Photo <span className="text-red-500">*</span>
            </label>
            <input 
              type="file" 
              onChange={(e) => handlePhotoUpload(e, 'participant')} 
              accept="image/*,.heic,.heif" 
              className={errors.participantPhoto ? 'border-red-500' : ''}
            />
            <p className="text-sm text-gray-600 mt-1">Supports: JPG, PNG, HEIC (iPhone photos will be automatically converted)</p>
            {errors.participantPhoto && (
              <p className="text-red-500 text-sm mt-1">{errors.participantPhoto}</p>
            )}
            {participants[currentIndex].photoPreview && (
              <img src={participants[currentIndex].photoPreview} alt="Preview" className="w-48 mt-2" />
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Role"
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
              Pictured to the Left <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Pictured to the Left"
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
              <h3 className="font-semibold">Participants:</h3>
              {participants.map((participant, index) => (
                <div key={index} className="mt-2 p-2 bg-gray-50 rounded">
                  <p>Name: {participant.fullName}</p>
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
