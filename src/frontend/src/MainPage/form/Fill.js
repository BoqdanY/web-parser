import React from "react";

const Fill = ({ formData, setFormData, fields }) => {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div><input type="text" name="url" value={formData.url} onChange={handleChange} placeholder='http://' className={`${fields.url}`} /></div>
      <div><input type="text" name="element" value={formData.element} onChange={handleChange} placeholder='class= e.g .some-class' className={`${fields.element}`} /></div>
      <div><input type="text" name="tagName" value={formData.tagName} onChange={handleChange} placeholder='tag name e.g a or p' className={`${fields.tagName}`} /></div>
      <div><input type="text" name="range" value={formData.range} onChange={handleChange} placeholder='range e.g [some, something] or 1-10' className={`${fields.range}`} /></div>
      <button type="submit">Get Page Html</button>
    </>
  );
}

export default Fill