import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = (props) => {
    const [token, setToken] = useState('')

    return (
     <AuthContext.Provider value={{ token, setToken }}>
        {props.children}
     </AuthContext.Provider>
    )
}  