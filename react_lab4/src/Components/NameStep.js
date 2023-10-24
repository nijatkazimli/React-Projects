import React from 'react';

const NameStep = ({ formData, validationErrors, handleChange }) => {
  return (
    <div>
      <h2>Name Step</h2>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstname}
          onChange={(e) => handleChange('firstname', e.target.value)}
        />
        {validationErrors.firstname && (
          <p className="error">{validationErrors.firstname}</p>
        )}
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={(e) => handleChange('lastname', e.target.value)}
        />
        {validationErrors.lastname && (
          <p className="error">{validationErrors.lastname}</p>
        )}
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
        {validationErrors.email && (
          <p className="error">{validationErrors.email}</p>
        )}
      </div>
    </div>
  );
};

export default NameStep;
