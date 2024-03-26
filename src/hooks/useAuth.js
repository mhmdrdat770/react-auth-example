import axios from "../libs/axios"
export const useAuth = () => {



    const csrf = async () => await axios.get('sanctum/csrf-cookie')

    const login = async (inputs) => {
        try {
            await csrf()
            const { data } = await axios
                .post('api/auth/login', inputs)
                return data
        }
        catch (e) {
            console.log(e.message)
        }
    }

    const register = async (inputs) => {
        try {
            const { data } = await axios
                .post('api/auth/register', inputs)
                return data
        }
        catch (e) {
            console.log(e.message)
        }
    }

    const logout = async () => {
        try {
            const { data } = await axios
                .get('api/auth/logout')
                return data
        }
        catch (e) {
            console.log(e.message)
        }
    }

    return {
        login,
        register,
        logout
    }
}