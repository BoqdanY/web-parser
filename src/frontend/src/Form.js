import React, { useState } from 'react';
import formState from './form-state';
import Radio from './Radio';
import Fill from './Fill';

const Form = ({ setCode }) => {
  const [formData, setFormData] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData) {
      setCode(formState.errEmpty);
      return;
    }
    setCode(formState.loading);
    try {
      const response = await fetch('/parse', {
        method: 'GET',
        headers: {
          'Parseurl': formData,
        }
      });
      const data = await response.json();
      if (response.ok) setCode(data.data);
      else setCode(data.err);
    } catch (err) {
      if (err instanceof TypeError) {
        setCode(err.name);
      }
      console.log(err);
    }
    setFormData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Radio />
      <Fill formData={formData} setFormData={setFormData} />
    </form>
  );
};

export default Form;