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

  const handleRadioChange = (e) => {
    setParsingType(e.target.value);
  }

  const [formData, setFormData] = useState('');
  const [parsingType, setParsingType] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <h3>Choose type of parsing</h3>
      <div className='radio-container'>
        <div className='radio-child'>
          <input type="radio" id="parsingChoise1" name="parsing" value="gHTML" onChange={handleRadioChange} checked={parsingType === 'gHTML'} />
          <label htmlFor="parsingChoise1">Get HTML only</label>
        </div>
        <div className='radio-child'>
          <input type="radio" id="parsingChoise2" name="parsing" value="static" onChange={handleRadioChange} checked={parsingType === 'static'} />
          <label htmlFor="parsingChoise2">Get data from static page</label>
        </div>
        <div className='radio-child'>
          <input type="radio" id="parsingChoise3" name="parsing" value="dynamicPages" onChange={handleRadioChange} checked={parsingType === 'dynamicPages'} />
          <label htmlFor="parsingChoise3">Get data from dynamic page <span className="eg-span">(getting page)</span></label>
        </div>
        <div className='radio-child'>
          <input type="radio" id="parsingChoise4" name="parsing" value="dynamicData" onChange={handleRadioChange} checked={parsingType === 'dynamicData'} />
          <label htmlFor="parsingChoise4">Get data from dynamic page <span className="eg-span">(getting data)</span></label>
        </div>
      </div>

      <input type="text" name="name" value={formData} onChange={handleChange} placeholder='http://' />
      <button type="submit">Get Page Html</button>
    </form>
  );
};

export default Form;