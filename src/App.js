import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Ui from './pages/Ui';


function App() {
  return (
    <div className="App">
       <Provider store={store}>
          <Ui/>
       </Provider>
    </div>
  );
}

export default App;
