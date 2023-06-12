import Header from "./Header";
import Form from "./Form";
import CodeDisplay from "./CodeDisplay";
import { useState } from "react";

const App = () => {
  const [code, setCode] = useState('your page will be here')
  return (
    <>
      <Header />
      <div className="container">
        <Form setCode={setCode}/>
        <CodeDisplay code={code} setCode={setCode}/>
      </div>
    </>
  );
};

export default App;
