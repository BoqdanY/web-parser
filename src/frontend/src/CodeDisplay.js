import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import formState from './form-state';

const CodeDisplay = ({ code, setCode }) => {
  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopy('Copied');
    setTimeout(() => {setCopy('Copy')}, 1000);
  }
  
  const clearCode = () => {
    setCode(formState.default);
  }

  const [disabled, setDisabled] = useState('disabled');
  const [copy, setCopy] = useState('Copy');

  useEffect(() => {
    for (const state of Object.values(formState)) {
      if (code === state) {
        setDisabled('disabled');
        break;
      } else setDisabled('');
    }

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