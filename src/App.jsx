// import React from 'react';
import React from 'react';
import './App.css';
import Radio from './pages/Radio';
// import Input from './Form/Input';
// import CheckBox from "./pages/CheckBox";
// import Exercicie from "./pages/Exercicie";
// import TestFormObj from './pages/TestFormObj';

const App = () => {
  // const [name, setName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  const [cor, setCor] = React.useState();

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Radio
        options={['Azul', 'Vermelho', 'Verde']}
        value={cor}
        setValue={setCor}
      />
      {/* <TestFormObj /> */}
      {/* <Exercicie /> */}
      {/* <CheckBox /> */}
      {/* <Input id='nome' label='Nome' value={name} setValue={setName} required />
      <Input
        id='email'
        label='Email'
        value={email}
        setValue={setEmail}
        required
      /> */}
    </div>
  );
};

export default App;
