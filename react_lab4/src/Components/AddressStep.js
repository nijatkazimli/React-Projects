import React from 'react';

const AddressStep = ({ formData, handleChange }) => {
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
        <input
          type="text"
          placeholder="Zip Code"
          value={formData.delivery.zip}
          onChange={(e) => handleChange('zip', e.target.value, 'delivery')}
        />
        <input
          type="text"
          placeholder="City"
          value={formData.delivery.city}
          onChange={(e) => handleChange('city', e.target.value, 'delivery')}
        />
      </div>
      <div>
        <h3>Invoice Address</h3>
        <input
          type="text"
          placeholder="Street"
          value={formData.invoice.street}
          onChange={(e) => handleChange('street', e.target.value, 'invoice')}
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={formData.invoice.zip}
          onChange={(e) => handleChange('zip', e.target.value, 'invoice')}
        />
        <input
          type="text"
          placeholder="City"
          value={formData.invoice.city}
          onChange={(e) => handleChange('city', e.target.value, 'invoice')}
        />
      </div>
    </div>
  );
};

export default AddressStep;
