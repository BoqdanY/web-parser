import React from "react";
import { activeFieldsForParsingType } from "./fieldsForParsing/fieldsForParsing";

const Radio = ({ fieldsState, setFieldsState, parsingType, setParsingType }) => {
  const handleRadioChange = (e) => {
    setParsingType(e.target.value);
    const newFields = {};
    Object.keys(fieldsState).forEach(key => newFields[key] = 'disabled');
    activeFieldsForParsingType[e.target.value].forEach(key => newFields[key] = '');
    setFieldsState(newFields);
  }

  return (
    <>
      <h3>Choose type of parsing</h3>
      <div className='radio-container'>
        <div className='radio-child'>
          <input type="radio" id="parsingChoise1" name="parsing" value="gHTML" onChange={handleRadioChange} checked={parsingType === '' || parsingType === 'gHTML'} />
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