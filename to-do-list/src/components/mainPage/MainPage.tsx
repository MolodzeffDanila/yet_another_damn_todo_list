import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const MainPage = () => {
    const themeData = useContext(ThemeContext);
    return <>
        <ThemeToggle/>
        <h1>{themeData.theme}</h1>
    </>
}