import './App.css';
import Priority from './pages/priority/Priority';
import Status from './pages/status/Status';
import { Provider } from 'react-redux';
import store from './store/store';
import Ui from './pages/Ui';
import User from './pages/user/User';


function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <Ui/>
          {/* <User/> */}
         {/* <Status/>   */}
        {/* <Priority/> */}
       </Provider>
     
     
    </div>
  );
}

export default App;
