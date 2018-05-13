import * as React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        
        <Counter countBy={1}/>
      </div>
    );
  }
}

export default App;
