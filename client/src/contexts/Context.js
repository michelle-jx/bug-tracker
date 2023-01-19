import { createContext, useState } from "react";

export const Context = createContext()

const ContextProvider = props => {
    const [user, setUser] = useState({})

    const store = {
        user, setUser
    }
    return <ContextProvider value={store}>{props.children}</ContextProvider>
}

export default ContextProvider