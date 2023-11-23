import React from "react";
import "./App.css";
import Input from "./Form/Input";
// import CheckBox from "./pages/CheckBox";
// import Exercicie from "./pages/Exercicie";
// import TestFormObj from "./pages/TestFormObj";

const App = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <form style={{ width: "100vw", height: "100vh" }}>
      {/* <TestFormObj /> */}
      {/* <Exercicie /> */}
      {/* <CheckBox /> */}
      <Input id="nome" label="Nome" value={name} setValue={setName} required />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>enviar</button>
    </form>
  );
};

export default App;
