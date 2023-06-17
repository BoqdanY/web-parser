import React, { useState } from 'react';
import formState from './form-state';

const Form = ({ setCode }) => {
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

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

  const [formData, setFormData] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData} onChange={handleChange} placeholder='http://' />
      <button type="submit">Get Page Html</button>
    </form>
  );
};

export default Form;