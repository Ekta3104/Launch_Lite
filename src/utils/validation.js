export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePhone = (phone) => {
  // Accepts 10 digits, optional +91 or spaces
  const re = /^(\+91[-\s]?)?[0-9]{10}$/;
  // strip spaces first
  const cleanPhone = phone.replace(/\s+/g, '');
  return re.test(cleanPhone);
};

export const validateRequired = (value) => {
  return value !== null && value !== undefined && String(value).trim() !== '';
};

export const validateForm = (data, requiredFields = []) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    if (!validateRequired(data[field])) {
      errors[field] = "This field is required";
    }
  });

  if (data.email && !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
