'use client'
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext<any>(undefined)

export const GlobalProvider = ({children}: {children: React.ReactNode}) => {
    const [themeLight, setThemeLight] = useState(true)
    const [sessionActive, setSessionActive] = useState(false)
    const pathname = usePathname()

    const handleChangeTheme = () => {
        localStorage.setItem('theme', `${!themeLight}`)
        setThemeLight(!themeLight)
        const body = document.querySelector('body')
        if(body) body.style.backgroundColor = !themeLight ? '' : 'rgb(42, 42, 42)'
    }

    useEffect(() => {
        const theme = localStorage.getItem('theme')
        if(theme) setThemeLight(theme === 'true')
        const body = document.querySelector('body')
        if(theme && theme === 'false' && body) body.style.backgroundColor = 'rgb(42, 42, 42)'

        const token = localStorage.getItem('token')

        if(token) setSessionActive(true)
    },[pathname])

    const data = {
        themeLight,
        handleChangeTheme,
        sessionActive,
        setSessionActive
    }

    return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}