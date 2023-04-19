import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import axios from "axios"

type User = {
    _v?: number;
    _id?: string;
    email?: string;
    name?: string;
    password?: string;
}

export interface UserContextInterface {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
  }

type Props = {
    children: ReactNode
}

export const UserContext = createContext<Partial<UserContextInterface>>({})

export function UserContextProvider({children}: Props) {
    const [user, setUser] = useState()
    useEffect(() => {
        if (!user) {
        axios.get('/profile')
        }
    }, []);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

