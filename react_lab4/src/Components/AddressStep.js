import React from 'react';

const AddressStep = ({ formData, handleChange, validationErrors }) => {
  return (
    <div>
      <h2>Address Step</h2>
      <div>
        <h3>Delivery Address</h3>
        <input
          type="text"
          placeholder="Street"
          value={formData.delivery.street}
          onChange={(e) => handleChange('street', e.target.value, 'delivery')}
        />
        {validationErrors.delivery && validationErrors.delivery.street && (
          <p className="error">{validationErrors.delivery.street}</p>
        )}
        <input
          type="text"
          placeholder="Zip Code"
          value={formData.delivery.zip}
          onChange={(e) => handleChange('zip', e.target.value, 'delivery')}
        />
        {validationErrors.delivery && validationErrors.delivery.zip && (
          <p className="error">{validationErrors.delivery.zip}</p>
        )}
        <input
          type="text"
          placeholder="City"
          value={formData.delivery.city}
          onChange={(e) => handleChange('city', e.target.value, 'delivery')}
        />
        {validationErrors.delivery && validationErrors.delivery.city && (
          <p className="error">{validationErrors.delivery.city}</p>
        )}
      </div>
      <div>
        <h3>Invoice Address</h3>
        <input
          type="text"
          placeholder="Street"
          value={formData.invoice.street}
          onChange={(e) => handleChange('street', e.target.value, 'invoice')}
        />
        {validationErrors.invoice && validationErrors.invoice.street && (
          <p className="error">{validationErrors.invoice.street}</p>
        )}
        <input
          type="text"
          placeholder="Zip Code"
          value={formData.invoice.zip}
          onChange={(e) => handleChange('zip', e.target.value, 'invoice')}
        />
        {validationErrors.invoice && validationErrors.invoice.zip && (
          <p className="error">{validationErrors.invoice.zip}</p>
        )}
        <input
          type="text"
          placeholder="City"
          value={formData.invoice.city}
          onChange={(e) => handleChange('city', e.target.value, 'invoice')}
        />
        {validationErrors.invoice && validationErrors.invoice.city && (
          <p className="error">{validationErrors.invoice.city}</p>
        )}
      </div>
    </div>
  );
};

export default AddressStep;
