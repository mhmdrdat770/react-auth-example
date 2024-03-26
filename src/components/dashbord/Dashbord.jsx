import { useNavigate } from 'react-router-dom'
import { useUser, useDispatch } from '../../hooks/useUser'
import { useEffect } from 'react'
import { useAuth } from '../../hooks/useAuth'
const Dashbord = () => {

    const { user, loading } = useUser()

    const dispatch = useDispatch()
    const { logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate('/auth/login')
            return
        }
    }, [user])

    const handleLogout = async () => {
        try {
            const { success } = await logout()

            if (success) {
                dispatch({ type: 'LOAD_USER' })
            }
        }
        catch (e) {
            console.log(e.message)
        }
    }



    return (
        <>
            {user && !loading ? (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 shadow border mt-4">
                            <div className="row p-5">
                                <div className="col-12 d-flex align-items-baseline mt-2">
                                    <span className="text-secondary">نام :</span><h6 className="mx-1">{user.name}</h6>
                                </div>
                                <div className="col-12 d-flex align-items-baseline mt-4">
                                    <span className="text-secondary">ایمیل :</span><h6 className="mx-1">{user.email}</h6>
                                </div>
                                <div className="col-12 d-flex align-items-baseline mt-4">
                                    <button className="btn btn-danger btn-block w-100 text-center" onClick={handleLogout}>خروج از حساب کاربری</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}

        </>
    )
}

export default Dashbord