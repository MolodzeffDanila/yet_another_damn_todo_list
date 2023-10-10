import { createContext } from 'react';

export type ThemeType = "light" | "dark"; 

export type ThemeProviderType = {
    theme: string,
    setTheme: (elem:string) => void
}

export const initialContext = {
    theme: "light" as ThemeType,
    setTheme: (elem: string)=>{}
}

//TO Do: типизировать объект контекста
export const ThemeContext = createContext<ThemeProviderType>(initialContext);