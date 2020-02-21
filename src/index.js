import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
function Hellow () {
  return <div>Hellow组件</div>
}
const element = <div className='box'>
  {/* <Hellow /> */}
  <App />

</div>
ReactDOM.render(element, document.getElementById('root'))