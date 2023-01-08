import { createContext, useContext } from "react";



const allContext=createContext();


export const useAllContext=()=>{
    return useContext(allContext);
}

export const AllContextProvider=({value,children})=>{
    return(
        <allContext.Provider value={value}>
            {children}
        </allContext.Provider>
    )
}