import React from 'react';
import ReactDOM from 'react-dom/client';
import './containers/index.css';
// import Card from './Card';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
// import registerServiceWorker from './registerServiceWorker';
import 'tachyons';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

//initial render
// root.render(<App name="Saeloun blog" />);


root.render( <App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// registerServiceWorker();

reportWebVitals();


// ReactDOM.render