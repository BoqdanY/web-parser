import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('Url for parse: ', formData);
    try {
      const request = await fetch('/parse', {
        method: 'GET',
        headers: {
          'Parseurl': formData,
        }
      });
      const data = await request.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    setFormData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData} onChange={handleChange} placeholder='http://' />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;