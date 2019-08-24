import React, {Component} from 'react';
import User from './components/User'
import './App.css';

const user = [
  {
  'name': '이채민',
  'type': '일반인',
  'age': 27,
  'job': '프리랜서'
  },
  {
    'name': '송송이',
    'type': '일반인',
    'age': 28,
    'job': '디자이너'
    }
]

class App extends Component {
  render() {
    return (
      <div>
        {user.map(c => {
          return <User name={c.name} type={c.type} age={c.age} job={c.job} />
        })}
      </div>
    );
  }
}

export default App;
