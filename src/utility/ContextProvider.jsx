import React, { createContext,useState } from 'react'


export const context=createContext()


export const ContextProvider = ({children}) => {
    const [textcolour,settextcolour]=useState('purple')

     
    return (
   
<context.Provider value={{textcolour,settextcolour}} >
    {children}
</context.Provider>

  )
}

export default ContextProvider