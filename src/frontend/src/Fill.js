import React from "react";

const Fill = ({ formData, setFormData, fields }) => {
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <div><input type="text" name="url" value={formData.url} onChange={handleChange} placeholder='http://' className={`${fields.url}`} /></div>
      <div><input type="text" name="element" value={formData.element} onChange={handleChange} placeholder='class=...' className={`${fields.element}`} /></div>
      <div>
        <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder='from e.g 10' className={`${fields.from}`} />
        <input type="text" name="to" value={formData.to} onChange={handleChange} placeholder='to e.g 20' className={`${fields.to}`} />
      </div>
      <button type="submit">Get Page Html</button>
    </>
  );
}

export default Fill