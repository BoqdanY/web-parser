import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState('');

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async () => {
    console.log('Url for parse: ', formData);
    try {
      const request = await fetch('http://localhost:3001/parse', {
        method: 'GET',
        headers: {
          'UrlForParse': formData
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