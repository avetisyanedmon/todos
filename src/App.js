import './App.css';
import Container from './components/Container';
import TodoItem from './components/TodoItem';
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Container}/>
        <Route path='/:date' component={TodoItem}/>
      </Router>
    </div>
  );
}

export default App;
