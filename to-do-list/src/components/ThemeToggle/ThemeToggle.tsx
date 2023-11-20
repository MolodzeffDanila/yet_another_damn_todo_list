import { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import "./ThemeToggle.css"

const swither = {
    dark: "light",
    light: "dark"
}

export const ThemeToggle = () =>{
    const {theme, setTheme} = useContext(ThemeContext);
    
    const handleChange = () =>{
        //@ts-ignore
        setTheme(swither[theme])
    }
    return <>
    <h2>Theme Switch</h2>
        <label className="switch">
            <input type="checkbox" onChange={handleChange}/>
            <span className="slider round"></span>
        </label>
    </>
}