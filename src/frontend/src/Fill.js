import React from "react";

const Fill = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  return (
    <>
      <input type="text" name="name" value={formData} onChange={handleChange} placeholder='http://' />
      <button type="submit">Get Page Html</button>
    </>
  );
}

export default Fill