import { useContext } from "react";
import {DispatchContext,UserContext} from '../context/UserContext'

export const useDispatch = () => useContext(DispatchContext)
export const useUser = () => useContext(UserContext)