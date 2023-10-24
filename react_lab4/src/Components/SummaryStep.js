import React from 'react';

const SummaryStep = ({ formData }) => {
    // already done
  return (
    <div>
      <h2>Summary Step</h2>
      <div>
        <h3>Name:</h3>
        <p>{formData.firstname} {formData.lastname}</p>
      </div>
      <div>
        <h3>Delivery Address:</h3>
        <p>{formData.delivery.street}, {formData.delivery.zip}, {formData.delivery.city}</p>
      </div>
      <div>
        <h3>Invoice Address:</h3>
        <p>{formData.invoice.street}, {formData.invoice.zip}, {formData.invoice.city}</p>
      </div>
    </div>
  );
};

export default SummaryStep;
