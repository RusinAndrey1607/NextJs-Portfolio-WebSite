import { light, dark } from "./../styled/themes"
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { createContext, useEffect, useState } from 'react'
import { GlobalStyles } from "./../styled/global"
export const Context = createContext({} as { ToggleTheme: () => void })

function MyApp({ Component, pageProps }: AppProps) {
  // The line below is the state of the application theme.
  const [theme, setTheme] = useState<string | null>("light")

  // This function is intended for changing the theme of the  application.
  const ToggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  // This hook binds the value from localeStorage to the local state of the application. 
  // This is necessary to save the selected theme by the user.

  useEffect(() => {
    window.localStorage && setTheme(window.localStorage.getItem("theme"))
  }, [])

  return (
    <Context.Provider value={{
      ToggleTheme,
    }}>
      <ThemeProvider theme={theme === "light" ? light : dark}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Context.Provider>
  )
}

export default MyApp
