import React from "react";

const Fill = ({ formData, setFormData, fields }) => {
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <div className="flex-block">
      <div><input type="text" name="url" value={formData.url} onChange={handleChange} placeholder='http://' className={`${fields.url}`} /></div>
      <div><input type="text" name="element" value={formData.element} onChange={handleChange} placeholder='class=...' className={`${fields.element}`} /></div>
      <button type="submit">Get Page Html</button>
    </div>
  );
}

export default Fill