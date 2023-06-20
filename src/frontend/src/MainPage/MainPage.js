import Form from "./form/Form";
import CodeDisplay from "./code/CodeDisplay";

const MainPage = ({ code, setCode }) => {
  return (
    <>
      <Form setCode={setCode}/>
      <CodeDisplay code={code} setCode={setCode}/>
    </>
  );
};

export default MainPage