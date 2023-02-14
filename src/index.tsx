import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeSetterProvider } from './theme-provider';

//import reportWebVitals from './reportWebVitals';

const rootEle = document.getElementById('root')
const root = ReactDOM.createRoot(rootEle);
root.render(
  <React.StrictMode>
      <ThemeSetterProvider>
        <App />
      </ThemeSetterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
