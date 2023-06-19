import React, { useState } from 'react';
import formState from './form-state';
import Radio from './Radio';
import Fill from './Fill';

const initialFormData = {
  url: '',
  element: '',
  from: '',
  to: '',
  requestData: ''    
}

const Form = ({ setCode }) => {
  const [formData, setFormData] = useState(initialFormData);

  const [fields, setFields] = useState({
    url: '',
    element: 'disabled',
    from: 'disabled',
    to: 'disabled',
    requestData: 'disabled'
  });

  const [parsingType, setParsingType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData) {
      setCode(formState.errEmpty);
      return;
    }
    setCode(formState.loading);
    try {
      const bodyData = { parsingType, formData };
      const response = await fetch('/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      const data = await response.json();
      setCode(response.ok ? data.data : data.err);
    } catch (err) {
      if (err instanceof TypeError) setCode(err.name);
      console.log(err);
    }
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Radio fields={fields} setFields={setFields} parsingType={parsingType} setParsingType={setParsingType} />
      <Fill formData={formData} setFormData={setFormData} fields={fields} />
    </form>
  );
};

export default Form;