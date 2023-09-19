import './App.css';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Greeting from './features/greeting/Greeting';

function App() {
  return (
   <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Greeting}/>
        </Routes>
      </BrowserRouter>
   </Provider>
  );
}

export default App;
