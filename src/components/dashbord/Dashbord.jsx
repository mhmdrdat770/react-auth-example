import { useNavigate } from 'react-router-dom'
import {useUser} from '../../hooks/useUser'
import { useEffect } from 'react'
const Dashbord = () => {

    const {user} = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if(!user){
            navigate('/auth/login')
            return
       }
    },[])



    return (
        <>
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
                                <button className="btn btn-danger btn-block w-100 text-center">خروج از حساب کاربری</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashbord