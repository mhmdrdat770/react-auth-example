import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useUser } from '../../hooks/useUser'
import {useAuth} from '../../hooks/useAuth'
import { useEffect } from 'react'
import { useFormik } from 'formik'
import RegisterRule  from '../../validation/registerRule'

const Register = () => {

    const {user , loading} = useUser();

    const navigate = useNavigate()

    useEffect(() => {
        if(!loading && user){
            navigate('/')
        }
    },[user])

    const dispatch = useDispatch()

    const { register } = useAuth()


    const formik = useFormik({
        initialValues : {
            name : "",
            email : "",
            password : ""
        },
        validateOnMount : true,
        validationSchema : RegisterRule,

        onSubmit : async (values) => {
            try{
                const {success} = await register(values)

                if(success){
                    dispatch({ type : 'LOAD_USER' })
                }
            }
            catch(e){
                console.log(e.message)
            }
        }
    })


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-12 col-md-4 shadow border mt-4">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <div className="row p-5">

                                    <div className="col-12 my-2">
                                        <h2 className="text-center">ثبت نام</h2>
                                    </div>


                                    <div className="col-12 my-2">
                                        <label htmlFor="name">نام</label>
                                        <input type="text" className="form-control mt-2" id="name" placeholder="نام" {...formik.getFieldProps('name')} />
                                        {formik.errors.name && formik.touched.name && (
                                            <span className='mt-2 text-danger'>{formik.errors.name}</span>
                                        )}
                                    </div>

                                    <div className="col-12 my-2">
                                        <label htmlFor="email">ایمیل</label>
                                        <input type="text" className="form-control mt-2" id="email" placeholder="ایمیل" {...formik.getFieldProps('email')} />
                                        {formik.errors.email && formik.touched.email && (
                                            <span className='mt-2 text-danger'>{formik.errors.email}</span>
                                        )}
                                    </div>

                                    <div className="col-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="password">رمز عبور</label>
                                            <input type="password" className="form-control mt-2" id="password" placeholder="رمز عبور" {...formik.getFieldProps('password')} />
                                            {formik.errors.password && formik.touched.password && (
                                            <span className='mt-2 text-danger'>{formik.errors.password}</span>
                                        )}
                                        </div>
                                    </div>

                                    <div className="col-12 my-3">
                                        <button type="submit" disabled={!formik.isValid} className="btn btn-primary btn-sm btn-block w-100 text-center">ورود</button>
                                    </div>

                                    
                                    <div className="col-12 my-3">
                                        <Link to={'/auth/login'}>ورود</Link>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register