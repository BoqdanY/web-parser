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
};

const formDataTypes = {
  url: 'string',
  element: 'string',
  from: 'number',
  to: 'number',
  requestData: 'string'
};

const Form = ({ setCode }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [parsingType, setParsingType] = useState('');
  const [fieldsState, setFieldsState] = useState({
    url: '',
    element: 'disabled',
    from: 'disabled',
    to: 'disabled',
    requestData: 'disabled'
  });

  const validateData = (data, dataTypes) => {
    for (const [key, value] of Object.entries(data.formData)) {
      if (value === '') {
        setCode(`Fill ${key} input`);
        return false;
      }
    }
    for (const [key, value] of Object.entries(dataTypes)) {
      if (value === 'number') {
        console.log('here');
        const parsedNumber = Number(data.formData[key]);
        console.log(parsedNumber);
        if (!isNaN(parsedNumber)) continue;
        else {
          setCode(`${key} input must be a number`);
          return false;
        };
      } else {
        if (typeof data.formData[key] === value) continue;
        else return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData) {
      setCode(formState.errEmpty);
      return;
    }
    setCode(formState.loading);
    try {
      const bodyData = { parsingType, formData };
      if (!validateData(bodyData, formDataTypes)) {
        console.log('ok');
        return;
      }
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
      <Radio fieldsState={fieldsState} setFieldsState={setFieldsState} parsingType={parsingType} setParsingType={setParsingType} />
      <Fill formData={formData} setFormData={setFormData} fields={fieldsState} />
    </form>
  );
};

export default Form;