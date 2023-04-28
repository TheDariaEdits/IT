import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react"
import axios from "axios"

export interface UserContextInterface {
    user: any;
    ready: boolean;
    setUser: Dispatch<SetStateAction<any>>;
    setReady: Dispatch<SetStateAction<boolean>>;
  }

type Props = {
    children: ReactNode
}

export const UserContext = createContext<Partial<UserContextInterface>>({})

export function UserContextProvider({children}: Props) {
    const [user, setUser] = useState()
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
                setReady(true)
              })
        }
    }, [])
    return (
        <UserContext.Provider value={{user, setUser, ready}}>
            {children}
        </UserContext.Provider>
    )
}

