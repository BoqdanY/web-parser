import React from "react";

const fieldsState = {
  gHTML: ['url'],
  static: ['url', 'element'],
  dynamicPages: ['url', 'element', 'from', 'to'],
  dynamicData: ['url', 'element', 'from', 'to', 'requestData']
};

const Radio = ({ fields, setFields, parsingType, setParsingType }) => {
  const handleRadioChange = (e) => {
    setParsingType(e.target.value);
    const newFields = {};
    Object.keys(fields).forEach(key => newFields[key] = 'disabled');
    fieldsState[e.target.value].forEach(key => newFields[key] = '');
    setFields(newFields);
  }

  return (
    <>
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
          <label htmlFor="parsingChoise3">Get data by dynamic page <span className="eg-span">(getting page)</span></label>
        </div>
        <div className='radio-child'>
          <input type="radio" id="parsingChoise4" name="parsing" value="dynamicData" onChange={handleRadioChange} checked={parsingType === 'dynamicData'} />
          <label htmlFor="parsingChoise4">Get data by dynamic page <span className="eg-span">(getting data)</span></label>
        </div>
      </div>
    </>
  );
};

export default Radio