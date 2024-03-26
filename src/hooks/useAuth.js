import axios from "../libs/axios"
export const useAuth = () => {

    const user = async () => {
        try {
            const { data, status } = await
                axios
                    .get('api/user')

            if (status === 200) {
                return data
            }
            return null
        }
        catch (e) {
            console.log(e.message)
        }
    }

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

    return {
        user,
        login,
        register
    }
}