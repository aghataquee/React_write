import logo from './logo.svg';
import './App.css';
import Person from './Indd.js';
import Button from './Button.js';
import Header from './Header';
import List from './List';
const App = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    
  }
};


const app = () => {
  const listItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

function App() {
  return (
    <div className="App">
      <Person name="Taquee Agha" age='19'/>
      <Button text="Click me" onClick={handleClick} />
      <Header title="Welcome to My App" />
      <List items={listItems} />

    </div>
  );
}

export default App;
