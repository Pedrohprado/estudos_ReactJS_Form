import './App.css';
import { GlobalForm } from './context/context-form';

import MoveLogin from './Components/MoveLogin';
import Form from './page/Form';

const App = () => {
  return (
    <>
      <GlobalForm>
        <div className='container'>
          <MoveLogin />
          <Form />
        </div>
      </GlobalForm>
    </>
  );
};

export default App;
