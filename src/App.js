import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './App.css';
import CakeContainer from './component/CakeContainer';
import hooksCakeContainer from './component/hooksCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <hooksCakeContainer/> 
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
