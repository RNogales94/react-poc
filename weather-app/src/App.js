import React from 'react';
import LocationList from './components/LocationList'
import './App.css';


const cities = [
  'Granada,es',
  'Praha,cz',
  'Roma,it',
  'Valencia,es',
  'Madrid,es'
];

function App() {
  return (
    <div className="App">
      < LocationList cities={cities}/>
    </div>
  );
}

export default App;
