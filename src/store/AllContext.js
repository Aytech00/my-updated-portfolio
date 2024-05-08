import { Children, createContext, useContext, useState } from "react";


const contx = createContext(null)

 export const ContxProvider = ({children})=> {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <contx.Provider value={{
            sidebarOpen, setSidebarOpen
        }}>

            {
                children
            }
        </contx.Provider>
    )
}


export const useAllContx = ()=> {
    return  useContext(contx)
}