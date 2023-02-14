import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './styles/global-styles';
import * as React from 'react';
import {ThemeContext} from './theme-provider';
import { useContext } from 'react';
import ThemeSwitcher from './theme-switcher'

const MockResponses = [{
  "spells" : [
    "Strangling Vine",
    "Longstrider",
    "Invisibility"
  ],
  "results": 3
},{
  "spells" : [
    "Acid Arrow",
    "Fireball"
  ],
  "results": 2
}
];

function App() {
  const tc = useContext(ThemeContext)
  const [response, setResponse] = React.useState({})

  React.useEffect(() => {
    if (response === MockResponses[0]) {
      setResponse(MockResponses[1])
    } else {
      setResponse(MockResponses[0])
    }
  }, [tc.theme]);

   return (
      <ThemeProvider theme={tc.theme}>
        <GlobalStyles />
        <div className="app">
          <header className="app-header">
            <p>
              {JSON.stringify(response)}
              <ThemeSwitcher />
            </p>
          </header>
        </div>
      </ThemeProvider>
  );
}

export default App;