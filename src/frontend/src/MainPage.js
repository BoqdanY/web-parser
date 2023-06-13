import Form from "./Form";
import CodeDisplay from "./CodeDisplay";

const MainPage = ({ code, setCode }) => {
  return (
    <>
      <Form setCode={setCode}/>
      <CodeDisplay code={code} setCode={setCode}/>
    </>
  );
};

export default MainPage