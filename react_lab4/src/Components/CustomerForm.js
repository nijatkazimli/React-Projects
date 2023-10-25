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

  const copyAddress = (shouldCopy) => { // really needed this function not to call useStates 3 times concurrently.
    if (shouldCopy) {                   // Asynchronous nature of them made everything complicated.
      const {
        delivery: { street: deliveryStreet, zip: deliveryZip, city: deliveryCity }
      } = formData;
      const invoice = {
        street: deliveryStreet,
        zip: deliveryZip,
        city: deliveryCity,
      };
      setFormData({ ...formData, invoice });
    } else {
      const invoice = {
        street: '',
        zip: '',
        city: '',
      };
      setFormData({ ...formData, invoice});
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
    if (step === 1) {
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

      if (Object.keys(errors).length === 0) {
        setValidationErrors({});
        setStep(step + 1);
      } else {
        setValidationErrors(errors);
      }
    } else if (step === 2) {
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

      if (Object.keys(errors).length === 0) {
        setValidationErrors({});
        setStep(step + 1);
      } else {
        setValidationErrors(errors);
      }
    } else {
      setStep(step + 1);
    }
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
            handleChange={(field, value, section) =>
              setFormData({
                ...formData,
                [section]: { ...formData[section], [field]: value },
              })
            }
            setSameAddress={(value => copyAddress(value))}
            invoiceSameAsDelivery={invoiceSameAsDelivery}
            setInvoiceSameAsDelivery={(value => setInvoiceSameAsDelivery(value))}
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
      {renderStep()}
      {step < 3 && <button className="next-button" onClick={handleNextStep}>Next</button>}
    </div>
  );
};

export default CustomerForm;
