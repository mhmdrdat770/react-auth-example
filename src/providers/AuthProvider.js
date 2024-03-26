import { useEffect } from 'react';
import { DispatchContext, UserContext } from '../context/UserContext'
import axios from '../libs/axios'
import { useReducerAsync } from "use-reducer-async";

const initialState = {
    user: null,
    loading: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'START_LOAD_USER':
            return { ...state, loading: true };
        case 'END_LOAD_USER':
            return { ...state, loading: false, user: action.payload };
        case 'REJECT_LOAD_USER':
            return { ...state, loading: false, user: null };
    }
};

const asyncActionHandlers = {
    LOAD_USER: ({ dispatch }) => async (action) => {
        dispatch({ type: 'START_LOAD_USER' });
        try {
            const { data, status } = await
                axios
                    .get('api/user')

            if (status === 200) {
                dispatch({ type: 'END_LOAD_USER', payload: data });
                return;
            }
            dispatch({ type: 'REJECT_LOAD_USER' });
            return;
        }
        catch (e) {
            console.log(e.message)
        }
    },
};



const AuthProvider = ({ children }) => {

    const [state, dispatch] = useReducerAsync(reducer, initialState, asyncActionHandlers);

    useEffect(() => {
        dispatch({ type : 'LOAD_USER' })
    },[])

    return (
        <UserContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </UserContext.Provider>
    )
}

export default AuthProvider