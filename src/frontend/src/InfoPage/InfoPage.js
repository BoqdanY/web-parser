const InfoPage = () => {
  return (
    <>
      <h1>Info Page</h1>
      <h2>How to use it?</h2>
      <p>
        <span className="info-span">1. Explore the website.</span>
        <span className="info-span">2. Explore the HTML markup of the website <span className="eg-span">(find the #id or .clasName of element which contain information which you want to get).</span></span>
        <span className="info-span">3. If you want to get data from tag - write name of tag.</span>
        <span className="info-span">4. Fill the form and push the button.</span>
      </p>
      <h2>Warnings</h2>
      <span className="info-span">In order to get <span className="eg-span">element by class</span> - write .class-name in second input.</span>
      <span className="info-span">In order to get <span className="eg-span">element by id</span> - write #id-name in second input.</span>
      <span className="info-span">In order to get <span className="eg-span">text of element</span> - write <span className="eg-span">"-"</span> in third input.</span>
    </>
  );
};

export default InfoPage