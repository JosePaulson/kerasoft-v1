import { useState, createContext } from 'react'

const StateManager = createContext()
export const htmlClassList = document.querySelector('html').classList

export const StateProvider = ({children}) => {
    const [dark, setDark] = useState(false)
    const [item, setItem] = useState(null)

    const handleDarkMode = () => {
        htmlClassList.toggle('dark')
        setDark(prev=>!prev)
    }

    const revertToLightMode = () => {
        htmlClassList.remove('dark')
        setDark(false)
    }

    return <StateManager.Provider value={
        {
            dark,
            setDark,
            item,
            setItem,
            handleDarkMode,
            revertToLightMode
        }
    }>
        {children}
    </StateManager.Provider>
}

export default StateManager