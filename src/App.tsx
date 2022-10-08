import './App.css';

import { GlobalContext } from './context/ContextProvider';
import { ChangeData } from './components/ChangeData';
import { Data } from './components/Data';

function App() {

  return (
    <GlobalContext>
      <ChangeData />
      <Data />
    </GlobalContext>
  );
}

export default App;
