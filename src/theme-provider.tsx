import * as React from "react"
import LightTheme from "./styles/light-theme"

interface Props {
    children?: any
    // any props that come into the component
}

const ThemeContext = React.createContext({
    theme: undefined,
    setTheme: undefined
});

function ThemeSetterProvider({ children }:Props) {
    const [theme, setTheme] = React.useState(LightTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeSetterProvider, ThemeContext}