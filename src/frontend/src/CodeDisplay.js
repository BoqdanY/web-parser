import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const CodeDisplay = ({ code, setCode }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopy('Copied');
    setTimeout(() => {setCopy('Copy')}, 1000);
  }
  
  const clearCode = () => {
    setCode('your page will be here');
  }

  const [disabled, setDisabled] = useState('disabled');
  const [copy, setCopy] = useState('Copy');

  useEffect(() => {
    code === 'your page will be here' ? setDisabled('disabled') : setDisabled('');
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="code-display">
      <pre>
        <code className="language-html">{code}</code>
      </pre>
      <button className={`copy ${disabled}`} onClick={copyCode}>{copy}</button>
      <button className={`clear ${disabled}`} onClick={clearCode}>Clear</button>
    </div>
  );
};

export default CodeDisplay;