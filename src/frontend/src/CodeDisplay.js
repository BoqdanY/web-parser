import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

const CodeDisplay = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="code-display">
      <pre>
        <code className="language-html">{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;