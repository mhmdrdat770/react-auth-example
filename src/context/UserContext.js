import { createContext } from "vm";

const UserContext = createContext(null)
const DispatchContext = createContext(null)

export {
    UserContext,
    DispatchContext
}