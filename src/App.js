import { BrowserRouter } from 'react-router-dom';
import Routes from './router/Routes';

import './App.css';
import Button from '@material-ui/core/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <p>lorem dnkgnkdekngkn g golojtoeoj ojeohtohze ohtoheoh</p>
        <Button variant="contained" color="primary">
         Test Material UI
        </Button>
      </header>
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
