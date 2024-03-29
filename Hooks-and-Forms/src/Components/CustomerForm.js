import React, { useState } from 'react';
import './CustomerForm.css';
import NameStep from './NameStep';
import AddressStep from './AddressStep';
import SummaryStep from './SummaryStep';

const CustomerForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    delivery: {
      street: '',
      zip: '',
      city: '',
    },
    invoice: {
      street: '',
      zip: '',
      city: '',
    },
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [invoiceSameAsDelivery, setInvoiceSameAsDelivery] = useState(false);  // had to add because I would like to know the state of
                                                                              // it when going back to step 2.
  
  const handleAddressChange = (field, value, section) => {  // really needed this function not to call useStates 3 times concurrently.
    const updatedFormData = { ...formData };                // Asynchronous nature of them made everything complicated.
    if (section === 'delivery') {
      updatedFormData.delivery = { ...updatedFormData.delivery, [field]: value };
    }
    if (section === 'invoice') {
      updatedFormData.invoice = { ...updatedFormData.invoice, [field]: value };
    }
    if (invoiceSameAsDelivery) {
      updatedFormData.invoice = { ...updatedFormData.delivery, [field]: value };
    }
    setFormData(updatedFormData);
  };
  
  const clearInvoice = () => {
    const updatedFormData = { ...formData };
    const clearedInvoice = {
      street: '',
      zip: '',
      city: '',
    }
    updatedFormData.invoice = clearedInvoice;
    setFormData(updatedFormData);
  }

  const handleToggleChange = (isChecked) => {
    setInvoiceSameAsDelivery(isChecked);
    if ( !isChecked ) {
      clearInvoice();
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const validateZip = (zip) => {
    const emailRegex = /^\d{2}-\d{3}$/;
    return emailRegex.test(zip);
  };  

  const handleNextStep = () => {
    const isStep1Valid = step === 1 ? validateStep1() : true;
    const isStep2Valid = step === 2 ? validateStep2() : true;
  
    if (isStep1Valid && isStep2Valid) {
      setValidationErrors({});
      setStep(step + 1);
    }
  };
  
  const validateStep1 = () => {
    const { firstname, lastname, email } = formData;
    const errors = {};
  
    if (!firstname) {
      errors.firstname = 'First name is required';
    }
    if (!lastname) {
      errors.lastname = 'Last name is required';
    }
    if (!email || !validateEmail(email)) {
      errors.email = 'Email is required and must be valid';
    }
  
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return false;
    }
  
    return true;
  };
  
  const validateStep2 = () => {
    const {
      delivery: { street, zip, city },
      invoice: { street: invoiceStreet, zip: invoiceZip, city: invoiceCity },
    } = formData;
    const errors = {};
  
    if (!street) {
      errors.delivery = { ...errors.delivery, street: 'Street is required' };
    }
    if (!zip || !validateZip(zip)) {
      errors.delivery = { ...errors.delivery, zip: 'Zip code is required and must have a valid format (DD-DDD)' };
    }
    if (!city) {
      errors.delivery = { ...errors.delivery, city: 'City is required' };
    }
    if (!invoiceStreet) {
      errors.invoice = { ...errors.invoice, street: 'Street is required' };
    }
    if (!invoiceZip || !validateZip(invoiceZip)) {
      errors.invoice = { ...errors.invoice, zip: 'Zip code is required and must have a valid format (DD-DDD)' };
    }
    if (!invoiceCity) {
      errors.invoice = { ...errors.invoice, city: 'City is required' };
    }
  
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return false;
    }
  
    return true;
  };
  

  const handlePreviousStep = (stepToGoBack) => {
    setStep(stepToGoBack);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <NameStep
            formData={formData}
            validationErrors={validationErrors}
            handleChange={(field, value) =>
              setFormData({ ...formData, [field]: value })
            }
          />
        );
      case 2:
        return (
          <AddressStep
            formData={formData}
            validationErrors={validationErrors}
            handleChange={handleAddressChange}
            invoiceSameAsDelivery={invoiceSameAsDelivery}
            handleToggleChange={handleToggleChange}
          />
        );
      case 3:
        return <SummaryStep formData={formData} handlePreviousStep={handlePreviousStep}/>;
      default:
        return null;
    }
  };
  
  return (
    <div className="customer-form">
      <div className="form-container">
        {renderStep()}
        {step < 3 && (
          <button className="next-button" onClick={handleNextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerForm;
