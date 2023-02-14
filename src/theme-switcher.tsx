import {ThemeContext} from "./theme-provider";
import { useContext } from "react";
import Darktheme from "./styles/dark-theme";
import LightTheme from "./styles/light-theme";

function ThemeSwitcher() {
    const tc = useContext(ThemeContext);
    
    const toggleTheme = () => {
        return tc.theme === LightTheme ? Darktheme : LightTheme
    }

    return (<a className="theme-switcher" onClick={() => tc.setTheme(toggleTheme())}>
                Switch Theme
            </a>) 
}

export default ThemeSwitcher;
