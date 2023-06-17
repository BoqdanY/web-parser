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
      <div className='radio-container'>
        <div>
          <input type="radio" id="contactChoice1" name="contact" value="email" />
          <label for="contactChoice1">Get HTML</label>
        </div>
        <div>
          <input type="radio" id="contactChoice2" name="contact" value="phone" />
          <label for="contactChoice2">Static</label>
        </div>
        <div>
          <input type="radio" id="contactChoice3" name="contact" value="mail" />
          <label for="contactChoice3">Dynamic by getting page</label>
        </div>
        <div>
          <input type="radio" id="contactChoice3" name="contact" value="mail" />
          <label for="contactChoice3">Dynamic by getting data</label>
        </div>
      </div>

      <input type="text" name="name" value={formData} onChange={handleChange} placeholder='http://' />
      <button type="submit">Get Page Html</button>
    </form>
  );
};

export default Form;