import React from 'react';

const SummaryStep = ({ formData, handlePreviousStep }) => {
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
      <div>
        <button className = "previous-button" onClick={() => handlePreviousStep(2)}>Back to Step 2</button>        
        <button className = "previous-button" onClick={() => handlePreviousStep(1)}>Back to Step 1</button>
      </div>
    </div>
  );
};

export default SummaryStep;
