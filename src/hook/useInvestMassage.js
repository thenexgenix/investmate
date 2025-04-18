import { useState } from 'react';

const useInvestMassage = () => {
  const [formData, setFormData] = useState({
    agreedToTerms: false,
    name: '',
    email: '',
    message: '',
    interestedProject: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the terms and conditions';
    }

    // Validate Web3Forms fields
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
    }

    if (!formData.interestedProject) {
      newErrors.interestedProject = 'Please select a project you are interested in';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    if (validateForm()) {
      try {
        // Web3Forms integration
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB_FORM_KEY,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            interested_project: formData.interestedProject,
          })
        });

        const result = await response.json();
        
        if (result.success) {
          setSubmitStatus({ 
            success: true, 
            message: 'Your investment interest has been submitted successfully!' 
          });
          // Reset form after successful submission
          setFormData({
            agreedToTerms: false,
            name: '',
            email: '',
            message: '',
            interestedProject: '',
          });
        } else {
          setSubmitStatus({ 
            success: false, 
            message: 'Failed to submit your investment interest. Please try again.' 
          });
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus({ 
          success: false, 
          message: 'An error occurred while submitting your investment interest. Please try again.' 
        });
      }
    }

    setIsSubmitting(false);
  };

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  };
};

export default useInvestMassage;