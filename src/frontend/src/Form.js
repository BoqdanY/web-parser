import React, { useState } from 'react';
import formState from './form-state';
import Radio from './Radio';
import Fill from './Fill';

const Form = ({ setCode }) => {
  const [formData, setFormData] = useState({
    url: '',
    element: '',    
  });

  const [fields, setFields] = useState({
    url: '',
    element: 'disabled'
  });

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
      <Radio fields={fields} setFields={setFields} />
      <Fill formData={formData} setFormData={setFormData} fields={fields} />
    </form>
  );
};

export default Form;