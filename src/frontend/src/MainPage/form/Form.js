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

const initFieldsState = {
  url: '',
  element: 'disabled',
  from: 'disabled',
  to: 'disabled',
  requestData: 'disabled'
};

const Form = ({ setCode }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [parsingType, setParsingType] = useState('');
  const [fieldsState, setFieldsState] = useState(initFieldsState);

  const validateData = (data) => {
    for (const [key, value] of Object.entries(data.formData)) {
      if (fieldsState[key] === 'disabled') continue;
      if (value === '') {
        setCode(formState.errEmpty(key));
        return false;
      }
      if (formDataTypes[key] === 'number') {
        const parsedNumber = Number(value);
        if (!isNaN(parsedNumber)) continue;
        else {
          setCode(formState.errNaN(key));
          return false;
        }
      }
    }
    return true;
  };

  const getAndSetCode = async () => {
    setCode(formState.loading);
    try {
      const bodyData = { parsingType, formData };
      if (!validateData(bodyData, formDataTypes, fieldsState)) {
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
    }
    setFormData(initialFormData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    getAndSetCode();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Radio fieldsState={fieldsState} setFieldsState={setFieldsState} parsingType={parsingType} setParsingType={setParsingType} />
      <Fill formData={formData} setFormData={setFormData} fields={fieldsState} />
    </form>
  );
};

export default Form;