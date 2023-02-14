import { css } from '@emotion/react';

const bgColor = '#f34534'
const bgColorHover = 'red'
const appCss = css({
  backgroundColor: bgColor,
  '& p': {color: 'white'},
  '&:hover': {
    backgroundColor: bgColorHover
  }
})

function App() {
  return (
    <div className="App" css={appCss}>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;