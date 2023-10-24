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

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
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
    } else {
      setStep(step + 1);
    }
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
            handleChange={(field, value, section) =>
              setFormData({
                ...formData,
                [section]: { ...formData[section], [field]: value },
              })
            }
          />
        );
      case 3:
        return <SummaryStep formData={formData} />;
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
