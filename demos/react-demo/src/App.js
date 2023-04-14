import logo from './logo.svg';
import './App.css';
import { MyComponent, defineCustomElements } from '@saugardev/react-ui-components';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent/>
    </div>
  );
}

export default App;
