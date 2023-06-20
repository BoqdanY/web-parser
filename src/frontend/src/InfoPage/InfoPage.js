const InfoPage = () => {
  return (
    <>
      <h1>Info Page</h1>
      <h2>How to use it?</h2>
      <p>
        <span className="info-span">1. Explore the website.</span>
        <span className="info-span">
          2. Check what type of data collection the website has.
          <ul>
            <li>Static</li>
            <li>Dynamic by getting page <span className="eg-span">(e.g https://someWebSite/page?=1)</span></li>
            <li>Dynamic by getting data and add it to page <span className="eg-span">(e.g in the Network tab in the console you may find some requests)</span></li>
          </ul>
          If nothing are suitable for you, It's parser is not for you :(
        </span>
        <span className="info-span">3. Explore the HTML markup of the website <span className="eg-span">(find the #id or .clasName of element which contain information which you want to get).</span></span>
        <span className="info-span">4. Fill the form and push the button.</span>
      </p>
    </>
  );
};

export default InfoPage